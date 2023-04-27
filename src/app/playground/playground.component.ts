import { Component, OnInit } from '@angular/core';
import { switchMap, of, delay } from 'rxjs';
import { SeoService } from '../core/services/seo.service';

const meta = {
  title: 'SBSC | My Playground',
  description:
    'This is where i play around with most angular concept and rxjs functions',
};

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss'],
})
export class PlaygroundComponent implements OnInit {
  times = of(2000, 1000, 3000, 1500);

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setMetaTags(meta);

    this.times
      .pipe(switchMap((time) => of(`Delayed by ${time}`).pipe(delay(time))))
      .subscribe((val) => console.log(val));
  }
}
