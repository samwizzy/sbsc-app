import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/core/services/seo.service';

const meta = {
  title: 'SBSC | Thank You',
  description: 'Thanks for shopping with us, we hope to see you around again',
};

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss'],
})
export class ThankYouComponent implements OnInit {
  title: string | null = null;
  active = false;

  constructor(private seo: SeoService) {
    this.seo.setMetaTags(meta);
  }

  context = {
    name: 'Samuel',
    person: { age: 90 },
  };

  ngOnInit(): void {}

  btnClick() {
    this.title = 'Hello world';
  }
}
