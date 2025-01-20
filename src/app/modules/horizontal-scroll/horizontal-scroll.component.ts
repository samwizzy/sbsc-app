import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-horizontal-scroll',
  templateUrl: './horizontal-scroll.component.html',
  styleUrls: ['./horizontal-scroll.component.scss'],
})
export class HorizontalScrollComponent implements AfterViewInit, OnDestroy {
  @ViewChild('horizontalContainer') horizontalContainer!: ElementRef<HTMLElement>;
  @ViewChild('horizontalRow') horizontalRow!: ElementRef<HTMLElement>;

  private scrollTrigger: ScrollTrigger | null = null;

  ngAfterViewInit(): void {
    // this.initHorizontalScroll();
    console.log(this.getWidth()*-1, 'this.getWidth()')
    const tween = gsap.to(this.horizontalRow.nativeElement, {
      x: this.getWidth(),
      duration: 3,
      ease: 'none',
    });

    ScrollTrigger.create({
      trigger: this.horizontalContainer.nativeElement,
      start: 'top 20%',
      end: () => `+=${this.getWidth() * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
      markers: true,
    });
  }

  getWidth() {
    const horizontalRow = this.horizontalRow.nativeElement;
    const horizontalContainer = this.horizontalContainer.nativeElement;
    return -(horizontalRow.scrollWidth - horizontalContainer.clientWidth);
  }

  private initHorizontalScroll() {
    const horizontalRowEl = this.horizontalRow.nativeElement;

    gsap.to(horizontalRowEl, {
      x: () => -(horizontalRowEl.scrollWidth - window.innerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: horizontalRowEl,
        start: 'top top',
        end: () => `+=${horizontalRowEl.scrollWidth}`,
        scrub: true,
        pin: true,
      },
    });
  }

  ngOnDestroy(): void {
    if (this.scrollTrigger) {
      this.scrollTrigger.kill();
    }
  }
}
