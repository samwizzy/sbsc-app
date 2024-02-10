import { animate, state, style, transition, trigger } from '@angular/animations';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-intersection',
  templateUrl: './intersection.component.html',
  styleUrls: ['./intersection.component.scss'],
  animations: [
    trigger('flyInOut', [
      state(
        'open',
        style({
          transform: 'translateX(0)',
        })
      ),
      state(
        'close',
        style({
          transform: 'translateX(100%)',
        })
      ),
      transition('open => close', [animate(500)]),
    ]),
  ],
})
export class IntersectionComponent implements OnInit, AfterViewInit {
  list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  @ViewChildren('article') templates!: QueryList<ElementRef>;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('show', entry.isIntersecting);
      });
    });

    this.templates.forEach((template) => {
      observer.observe(template.nativeElement);
    });
  }
}
