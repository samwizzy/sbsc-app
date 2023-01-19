import { Component, OnInit } from '@angular/core';
import {
  fromEvent,
  interval,
  switchMap,
  mergeMap,
  of,
  delay,
  concatMap,
} from 'rxjs';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss'],
})
export class PlaygroundComponent implements OnInit {
  constructor() {}

  times = of(2000, 1000, 3000, 1500);

  ngOnInit(): void {
    this.times
      .pipe(switchMap((time) => of(`Delayed by ${time}`).pipe(delay(time))))
      .subscribe((val) => console.log(val));
  }
}
