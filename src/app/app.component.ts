import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

declare var gtag: Function;
declare var gapi: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sbsc-app';

  constructor(router: Router) {
    router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // gtag('config', 'G-EXC72BX6RP', {
        //   path_path: event.urlAfterRedirects,
        // });
      });
  }
}
