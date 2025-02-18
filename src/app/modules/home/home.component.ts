import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { FooterService } from 'src/app/core/services/footer.service';
// import { SeoService } from 'src/app/core/services/seo.service';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const meta = {
  title: 'SBSC | Home Page',
  description: 'This is where you would most likely find me half the time',
};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  text: string = 'SAMUEL';

  @ViewChildren('box') boxes!: QueryList<ElementRef<HTMLElement>>;

  constructor(private footerService: FooterService) {}

  ngAfterViewInit(): void {
    gsap.from('.box', {
      y: 200,
      opacity: 0,
      ease: 'power1.inOut',
      stagger: 0.2,
      scrollTrigger: {
        trigger: '#box-container',
        start: 'top 80%',
        end: 'bottom 80%',
        scrub: true,
      },
    });
  }

  ngOnInit(): void {
    // this.seo.setMetaTags(meta);
    this.footerService.onLoad();

    console.log('Home');
  }
}
