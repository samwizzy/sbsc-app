import { AfterViewInit, Component, ElementRef, inject, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { exhaustMap, fromEvent, takeUntil } from 'rxjs';

@Component({
  selector: 'app-fromevent',
  templateUrl: './fromevent.component.html',
  styleUrls: ['./fromevent.component.scss'],
})
export class FromeventComponent implements AfterViewInit {
  ngZone = inject(NgZone);
  colorControl = new FormControl();

  @ViewChild('inputEl') inputEl!: ElementRef<HTMLInputElement>;

  ngOnInit() {}

  ngAfterViewInit(): void {
    fromEvent(this.inputEl.nativeElement, 'mousedown')
      .pipe(
        exhaustMap(() =>
          fromEvent(document, 'mousemove').pipe(takeUntil(fromEvent(document, 'mouseup')))
        )
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
