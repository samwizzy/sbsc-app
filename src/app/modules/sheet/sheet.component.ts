import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, DomPortal, TemplatePortal } from '@angular/cdk/portal';
import {
  AfterViewInit,
  Component,
  ElementRef,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DropdownComponent } from './dropdown/dropdown.component';
import { Observable, firstValueFrom, from, of } from 'rxjs';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss'],
})
export class SheetComponent implements AfterViewInit {
  isOpen = false;

  numbers$ = from([1, 2, 3, 4, 5]);
  friends$ = new Observable((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);
  });

  overlayRef!: OverlayRef;

  selectedPortal: any;

  domPortal!: DomPortal;
  componentPortal!: ComponentPortal<unknown>;
  templatePortal!: TemplatePortal;

  @ViewChild('trigger') btnViewContainerRef!: ViewContainerRef;

  constructor(private overlay: Overlay, private viewContainerRef: ViewContainerRef) {}

  @ViewChild('domPortalContent') domPortalContent!: ElementRef<HTMLElement>;
  @ViewChild('templatePortalContent') templatePortalContent!: TemplateRef<unknown>;

  ngOnInit() {
    this.numbers$.subscribe((val) => console.log(val));

    firstValueFrom(this.numbers$).then((val) => console.log(val));

    firstValueFrom(this.friends$).then((val) => console.log(val));
  }

  ngAfterViewInit() {
    this.domPortal = new DomPortal(this.domPortalContent);
    this.templatePortal = new TemplatePortal(this.templatePortalContent, this.viewContainerRef);
    this.componentPortal = new ComponentPortal(DropdownComponent);
  }

  openDropdown() {
    const position = this.overlay.position().global().right();

    this.overlayRef = this.overlay.create({
      width: '90vw',
      height: '100vh',
      maxWidth: '90vw',
      maxHeight: '100vh',
      backdropClass: 'kgl-dropcl',
      positionStrategy: position,
    });
    const modalComponentRef = new ComponentPortal(DropdownComponent);
    this.overlayRef.attach(modalComponentRef);
  }
}
