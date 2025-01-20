import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent implements OnInit, OnChanges {
  @Input() data!: any;

  constructor() {
    console.log(this.data, 'data');
  }

  ngOnInit(): void {
    console.log(this.data, 'data');

    this.data = 'Samuel';
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes, 'changed');
  }
}
