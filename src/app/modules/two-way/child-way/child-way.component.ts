import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-way',
  templateUrl: './child-way.component.html',
  styleUrls: ['./child-way.component.scss'],
})
export class ChildWayComponent implements OnInit, OnDestroy {
  intervalRef!: ReturnType<typeof setInterval>;

  @Input() counter: number = 0;

  @Output() counterChange = new EventEmitter();

  ngOnInit(): void {
    this.intervalRef = setInterval(() => {
      this.counter = this.counter + 1;

      this.counterChange.emit(this.counter);
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalRef);
  }
}
