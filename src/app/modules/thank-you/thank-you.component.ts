import { Component, OnInit } from '@angular/core';

declare var dataLayer: any[];

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss'],
})
export class ThankYouComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // dataLayer.push({
    //   currency: 'NGN',
    //   amount: 25000,
    // });
  }
}
