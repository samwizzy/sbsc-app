import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { FooterService } from './core/services/footer.service';

declare var gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'sbsc-app';

  constructor(router: Router, private footerService: FooterService) {
    router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        gtag('config', 'G-EXC72BX6RP', {
          path_path: event.urlAfterRedirects,
        });
      });
  }

  ngOnInit(): void {
    this.footerService.onLoad();
  }
}
