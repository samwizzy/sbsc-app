import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { SeoService } from 'src/app/core/services/seo.service';
declare var gtag: Function;

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
  constructor(router: Router, private seo: SeoService) {
    this.seo.setMetaTags(meta);

    router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        gtag('config', 'G-EXC72BX6RP', {
          path_path: event.urlAfterRedirects,
        });
      });
  }

  ngOnInit(): void {}
}
