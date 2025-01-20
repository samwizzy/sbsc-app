import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  inject,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { IsActiveMatchOptions, Router } from '@angular/router';

@Component({
  selector: 'app-scroll-in-view',
  templateUrl: './scroll-in-view.component.html',
  styleUrls: ['./scroll-in-view.component.scss'],
})
export class ScrollInViewComponent implements AfterViewInit {
  router = inject(Router);

  linkActiveOptions: IsActiveMatchOptions = {
    matrixParams: 'exact',
    queryParams: 'exact',
    paths: 'exact',
    fragment: 'exact',
  };

  @ViewChildren('section') sections!: QueryList<ElementRef<HTMLElement>>;
  @ViewChildren('navLink') navLinks!: QueryList<ElementRef<HTMLElement>>;

  @HostListener('window:scroll', ['$event']) onScroll(event: Event) {
    let current: any;

    this.sections.map((section) => {
      let sectionTop = section.nativeElement.offsetTop;

      if (scrollY >= sectionTop - 60) {
        current = section.nativeElement.getAttribute('id');
      }

      console.log(this.navLinks);

      this.navLinks.forEach((navLink) => {
        navLink.nativeElement.classList.remove('active');

        if (navLink.nativeElement.classList.contains(current)) {
          navLink.nativeElement.classList.add('active');
          this.router.navigate([], { fragment: current });
        }
      });
    });
  }

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    // console.log(this.sections);
  }

  onSectionChange(sectionId: string) {}

  scrollTo(section: string) {
    document.querySelector('#' + section)?.scrollIntoView();
  }

  /**
   *
   * @param section
   * preserveFragment
   */
  changeFragment(section: string) {
    // this.router.isActive([null, 'chat'], { type: 'intersection' });

    this.router.navigate([], { fragment: section });
  }
}
