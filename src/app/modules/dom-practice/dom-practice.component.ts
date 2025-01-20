import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { fromEvent, switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-dom-practice',
  templateUrl: './dom-practice.component.html',
  styleUrls: ['./dom-practice.component.scss'],
})
export class DomPracticeComponent implements OnInit, AfterViewInit {
  @ViewChild('circleTpl', { static: true }) circleEl!: ElementRef<HTMLDivElement>;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const source = fromEvent(document, 'mousedown');

    source
      .pipe(
        switchMap(() =>
          fromEvent<MouseEvent>(document, 'mousemove').pipe(
            takeUntil(fromEvent(document, 'mouseup'))
          )
        )
      )
      .subscribe((event) => {
        const target = event.target as HTMLElement;
        /**
         * get the width and height of the circle,
         * and divide the width and height by 2,
         * this is because the clientX and the clientY,
         * will give the x / y position of the cursor
         */

        const width = this.circleEl.nativeElement.offsetWidth / 2;
        const height = this.circleEl.nativeElement.offsetHeight / 2;

        /**
         * instead of translating the postion of the circle,
         * to the coordinate of clientX & clientY, 
         * which is where the cursor click happened
         */
        const x = event.clientX - width + 'px';
        const y = event.clientY - height + 'px';

        // this.renderer.setStyle(this.circleEl.nativeElement, 'left', x);
        // this.renderer.setStyle(this.circleEl.nativeElement, 'top', y);
        this.renderer.setStyle(this.circleEl.nativeElement, 'translate', `${x} ${y}`);
      });
  }
}
