import { Component, inject } from '@angular/core';
import { IStepOption, TourService } from 'ngx-ui-tour-md-menu';

@Component({
  selector: 'app-tour-guide',
  templateUrl: './tour-guide.component.html',
  styleUrls: ['./tour-guide.component.scss'],
})
export class TourGuideComponent {
  private readonly tourService = inject(TourService);
  private readonly steps: IStepOption[] = [
    {
      anchorId: 'start-button',
      title: 'Welcome',
      content: 'Welcome to the demo tour!',
    },
    {
      anchorId: 'speed-and-performance',
      title: 'Speed & Performance',
      content:
        'Achieve the maximum speed possible on the Web Platform today, and take it further, via Web Workers and server-side rendering.',
    },
    {
      anchorId: 'what-is-angular',
      title: 'What is Angular',
      content: 'Angular is a platform that makes it easy to build applications with the web.',
    },
    {
      anchorId: 'component-metadata',
      title: 'Component Metadata',
      content:
        'The metadata for a component class associates it with a template that defines a view.',
    },
  ];

  ngOnInit() {
    this.tourService.initialize(this.steps, {
      enableBackdrop: true,
      backdropConfig: {
        zIndex: '10',
      },
    });
  }

  startTour() {
    this.tourService.start();
  }
}
