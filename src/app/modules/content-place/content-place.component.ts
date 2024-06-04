import {
  AfterViewInit,
  Component,
  ComponentRef,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { TextComponent } from '../text/text.component';

@Component({
  selector: 'app-content-place',
  templateUrl: './content-place.component.html',
  styleUrls: ['./content-place.component.scss'],
})
export class ContentPlaceComponent implements AfterViewInit {
  @ViewChild('placeTemp') placeTemp!: TemplateRef<any>;

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngAfterViewInit(): void {
    this.create();
  }

  create() {
    const template = this.placeTemp.createEmbeddedView(null);

    const compRef: ComponentRef<TextComponent> = this.viewContainerRef.createComponent(
      TextComponent,
      {
        projectableNodes: [template.rootNodes],
      }
    );

    console.log(compRef.location.nativeElement);
  }
}
