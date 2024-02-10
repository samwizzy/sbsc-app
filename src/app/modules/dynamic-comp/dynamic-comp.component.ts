import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  Injector,
  NgModuleRef,
  TemplateRef,
  Type,
  ViewChild,
  ViewContainerRef,
  createNgModule,
} from '@angular/core';
import { EmailComponent } from '../email/email.component';
import { EmailModule } from '../email/email.module';
import { TextComponent } from '../text/text.component';

@Component({
  selector: 'app-dynamic-comp',
  templateUrl: './dynamic-comp.component.html',
  styleUrls: ['./dynamic-comp.component.scss'],
})
export class DynamicCompComponent implements AfterViewInit {
  observer!: ResizeObserver;
  width = '400px';
  height = '400px';

  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;
  @ViewChild('tmp') template!: TemplateRef<any>;
  @ViewChild('resizable') resizable!: ElementRef<HTMLDivElement>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngAfterViewInit(): void {
    this.observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        console.log('width', entry.contentRect.width);
        console.log('height', entry.contentRect.height);

        this.width = entry.contentRect.width + 'px';
        this.height = entry.contentRect.height + 'px';
      });
    });

    this.observer.observe(this.resizable.nativeElement);
  }

  ngOnInit() {}

  createComp() {
    this.container.clear();

    const templateRef = this.template.createEmbeddedView(null);

    // 1: factory resolver way
    // const factory = this.resolver.resolveComponentFactory(TextComponent);
    // const compRef = factory.create(this.container.injector, [templateRef.rootNodes]);
    // this.container.insert(compRef.hostView);

    // 2: view container for module/component
    const moduleRef = createNgModule(EmailModule, this.container.injector);
    this.container.createComponent(EmailComponent, {
      ngModuleRef: moduleRef,
      projectableNodes: [templateRef.rootNodes],
    });

    // 3: view container for module/component
    const compoRef = this.getComponentRef(EmailComponent, EmailModule);
    compoRef.instance.data = '';

    // 4: view container for component
    // this.container.createComponent(TextComponent, {
    //   projectableNodes: [templateRef.rootNodes],
    // });
  }

  getComponentRef<T>(component: Type<T>, module: any): ComponentRef<T> {
    const moduleRef: NgModuleRef<any> = createNgModule(module, this.injector);

    return this.viewContainerRef.createComponent(component, {
      ngModuleRef: moduleRef,
      projectableNodes: [],
    });
  }

  onResize(event: Event) {
    console.log(event, 'event');
  }
}
