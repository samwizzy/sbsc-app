import {
  Component,
  ComponentRef,
  ElementRef,
  Injector,
  Input,
  NgModuleRef,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  createNgModule,
} from '@angular/core';
import { TextComponent } from '../text/text.component';
import { EmailComponent } from '../email/email.component';
import { EmailModule } from '../email/email.module';
import { ManageCalendarComponent } from '../manage-calendar/manage-calendar.component';
import { ManageCalendarModule } from '../manage-calendar/manage-calendar.module';

@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.scss'],
})
export class DragdropComponent {
  @Input() value: string = '';
  @ViewChild('viewContainer', { read: ViewContainerRef }) viewContainerRef!: ViewContainerRef;
  @ViewChild('tmp', { read: TemplateRef }) template!: TemplateRef<any>;
  @ViewChild('container', { read: ViewContainerRef }) containerRef!: ViewContainerRef;

  @ViewChild('second') rightEl!: ElementRef;

  list = ['one', 'two', 'three', 'four'];
  loading: boolean = false;
  slides = [
    {
      name: 'Slide 1',
      url: 'https://kg-s3-assets.s3.amazonaws.com/sidebanner/e2ba7b42-7f80-48e6-bc6b-185964038076.jpeg',
    },
    {
      name: 'Slide 2',
      url: 'https://kg-s3-assets.s3.amazonaws.com/sidebanner/e2ba7b42-7f80-48e6-bc6b-185964038076.jpeg',
    },
    {
      name: 'Slide 3',
      url: 'https://kg-s3-assets.s3.amazonaws.com/sidebanner/e2ba7b42-7f80-48e6-bc6b-185964038076.jpeg',
    },
    {
      name: 'Slide 4',
      url: 'https://kg-s3-assets.s3.amazonaws.com/sidebanner/e2ba7b42-7f80-48e6-bc6b-185964038076.jpeg',
    },
    {
      name: 'Slide 5',
      url: 'https://kg-s3-assets.s3.amazonaws.com/sidebanner/e2ba7b42-7f80-48e6-bc6b-185964038076.jpeg',
    },
  ];

  constructor(private renderer: Renderer2, private injector: Injector) {}

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngAfterViewInit() {
    // this.loading = true;

    this.viewContainerRef.clear();

    // embedded view
    // this.viewContainerRef.createEmbeddedView(this.template);

    // host view
    const componentRef: ComponentRef<TextComponent> =
      this.viewContainerRef.createComponent(TextComponent);

    componentRef.instance.name = 'Samuel';

    componentRef.changeDetectorRef.detectChanges();
  }

  onDragStart(event: DragEvent) {
    const id = (event.target as HTMLInputElement).id;
    event.dataTransfer?.setData('control', id);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    const id = event.dataTransfer?.getData('control');

    if (id) {
      const el = document.getElementById(id);
      this.rightEl.nativeElement?.appendChild(el);
    }
  }

  /* 
  using return function in template would run the same number of times CD runs. 
  Not good for performance esp with heavy computation 
  */
  getData() {
    return 'SAMUEL';
    // console.log('i am checking...');
  }

  getComponentRef(component: any, module: any) {
    const moduleRef: NgModuleRef<any> = createNgModule(module, this.injector);

    return this.containerRef.createComponent(component, {
      ngModuleRef: moduleRef,
    });
  }

  openModal(data?: any) {
    this.containerRef.clear();

    this.renderer.addClass(this.containerRef.element.nativeElement, 'open');

    const componentRef = this.getComponentRef(ManageCalendarComponent, ManageCalendarModule);

    const typedComponentRef = componentRef as ComponentRef<ManageCalendarComponent>;

    typedComponentRef.instance.data = data;

    componentRef.changeDetectorRef.detectChanges();
  }
}
