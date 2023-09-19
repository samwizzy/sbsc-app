import {
  Component,
  ComponentRef,
  ElementRef,
  Input,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { TextComponent } from '../text/text.component';

@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.scss'],
})
export class DragdropComponent {
  @Input() value: string = '';
  @ViewChild('viewContainer', { read: ViewContainerRef }) viewContainerRef!: ViewContainerRef;
  @ViewChild('tmp', { read: TemplateRef }) template!: TemplateRef<any>;

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

  constructor() {}

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
}
