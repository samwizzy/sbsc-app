import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss'],
})
export class ModulesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', function () {
      document.getElementById('notifyButton')?.addEventListener('click', function () {
        if (!('Notification' in window)) {
          console.log('Web Notification not supported');
          return;
        }

        Notification.requestPermission(function (permission) {
          var notification = new Notification('Title', {
            body: 'HTML5 Web Notification API',
            icon: 'https://i.stack.imgur.com/Jzjhz.png?s=48&g=1',
            dir: 'auto',
          });

          setTimeout(function () {
            notification.close();
          }, 3000);
        });
      });
    });
  }

  onRouteActivated(comp: any) {
    // console.log(comp);
  }
}
