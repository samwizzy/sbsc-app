import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.scss'],
})
export class TwoWayComponent implements OnInit, AfterViewInit, OnDestroy {
  counterValue = 5;

  private subscription = new Subscription();

  @ViewChild(RouterOutlet) outlet: RouterOutlet | undefined;

  @ViewChild('siblingTemp') siblingTemp!: ElementRef<HTMLElement>;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.getComponentFromRoute();
    });

    this.activatedRoute.params.subscribe((params) => {
      console.log(params, 'params');
    });
  }

  ngAfterViewInit(): void {
    if (this.outlet) {
      console.log(this.outlet, ' outlet');
      this.subscription = this.outlet.activateEvents.subscribe((componentRef) => {
        console.log('Activated component:', componentRef);
      });
    }

    console.log(this.siblingTemp, 'siblingTemp');
  }

  private getComponentFromRoute() {
    // Access the active route's component
    const route = this.activatedRoute.root.firstChild;
    if (route) {
      console.log(route, 'route');
      console.log(route.component, 'route'); // This will log the component class
    }
  }

  routerActivated(event: any) {
    console.log(event, 'I am actiavted');
  }

  routeDeactivate(event: any) {
    console.log(event, 'I am deactiavted');
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
