import {
  AfterViewInit,
  ApplicationRef,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  HostBinding,
  Injector,
  Input,
  NgModuleRef,
  OnDestroy,
  OnInit,
  Renderer2,
  TemplateRef,
  Type,
  ViewChild,
  ViewContainerRef,
  createNgModule,
} from '@angular/core';
import { EmailComponent } from '../email/email.component';
import { EmailModule } from '../email/email.module';
import { TextComponent } from '../text/text.component';
import { Router, UrlTree } from '@angular/router';
import { isLoading } from 'src/app/store/product/actions';
import { Observable, of } from 'rxjs';

type Data = [location: number, train: string];

const data: Data = [0, ''];

@Component({
  selector: 'app-dynamic-comp',
  templateUrl: './dynamic-comp.component.html',
  styleUrls: ['./dynamic-comp.component.scss'],
  host: {
    'aria-disabled': 'true',
  },
})
export class DynamicCompComponent implements OnInit, AfterViewInit, OnDestroy {
  isLoading!: Observable<boolean>;
  observer!: ResizeObserver;
  width = '400px';
  height = '400px';
  compRef!: ComponentRef<any>;
  readOnly = true;

  @Input() title!: string;

  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;
  @ViewChild('tmp') template!: TemplateRef<any>;
  @ViewChild('resizable') resizable!: ElementRef<HTMLDivElement>;
  @ViewChild('canvasPanel') canvasPanel!: ElementRef<HTMLDivElement>;

  @HostBinding('attr.data-guid') @Input() guid: string = 'hello';
  // @HostBinding('style.--theme-color') @Input() themeColor: string = '#ff00ff';

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    private viewContainerRef: ViewContainerRef,
    private appRef: ApplicationRef,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnDestroy(): void {
    console.log('Destroying...');
  }

  ngAfterViewInit(): void {
    this.observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        this.width = entry.contentRect.width + 'px';
        this.height = entry.contentRect.height + 'px';
      });
    });

    this.observer.observe(this.resizable.nativeElement);

    // this.updateTitle();

    this.renderer.setStyle(this.elementRef.nativeElement, '--theme-color', '#ff00ff');
  }

  ngOnInit() {
    const urlTree: UrlTree = this.router.createUrlTree(['apps/commands'], {
      queryParams: { todoId: '209987776' },
    });

    const url = this.router.serializeUrl(urlTree);

    setTimeout(() => {
      this.isLoading = of(true);
    }, 4000);
  }

  deleteElement() {
    const els = this.elementRef.nativeElement.querySelectorAll('[data-el]');

    console.log(els);

    els?.forEach((el) => el.remove());
  }

  updateTitle() {
    /**
     * If the update to this value alters
     * the template, then you'd get the
     * ExpressionChangedAfterItHasBeenCheckedError error
     */
    // this.title = 'None';

    this.createComp();
    this.cdr.detectChanges();
  }

  createComp() {
    // To insert template into a container
    // this.container.clear();
    // const templateRef = this.template.createEmbeddedView(null);

    const templateRef = this.container.createEmbeddedView(this.template);
    console.log(templateRef, 'templateRef');

    // this.container.insert(templateRef);

    // 1: factory resolver way
    // const factory = this.resolver.resolveComponentFactory(TextComponent);
    // const compRef = factory.create(this.container.injector, [templateRef.rootNodes]);
    // this.container.insert(compRef.hostView);

    // 2: view container for module/component
    // const moduleRef = createNgModule(EmailModule, this.container.injector);
    // this.container.createComponent(EmailComponent, {
    //   ngModuleRef: moduleRef,
    //   projectableNodes: [templateRef.rootNodes],
    // });

    // 3: view container for module/component
    // const compRef = this.getComponentRef(EmailComponent, EmailModule);
    const compRef = this.viewContainerRef.createComponent(EmailComponent);

    compRef.instance.data = 'none';
    // compRef.setInput('data', 'i changed you');
    // compRef.changeDetectorRef.detectChanges();

    // 4: view container for component project element into ng-content(content projection)
    // this.container.createComponent(TextComponent, {
    //   projectableNodes: [templateRef.rootNodes],
    // });
  }

  insertComp() {
    const factory = this.resolver.resolveComponentFactory(TextComponent);
    this.compRef = factory.create(this.injector, undefined, '#forwardRef');
    this.container.insert(this.compRef.hostView);

    // insert into application
    this.appRef.attachView(this.compRef.hostView);
  }

  detachComp() {
    const index = this.container.indexOf(this.compRef.hostView);
    /**
     * this removes the view from the DOM, but doesn't call the ngOndestroy fn,
     * the component is stil alive and ccan't be re-inserted
     * */
    // this.container.detach(index);

    /** removes the view from the DOM and calls ngOndestroy fn */
    // this.container.remove(index);

    /** removes all the views from the DOM and calls their ngOndestroy fn */
    this.container.clear();
  }

  getComponentRef<T>(component: Type<T>, module: any): ComponentRef<T> {
    this.viewContainerRef.clear();

    const moduleRef: NgModuleRef<any> = createNgModule(module, this.injector);

    return this.viewContainerRef.createComponent(component, {
      ngModuleRef: moduleRef,
      projectableNodes: [],
    });
  }
}
