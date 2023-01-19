import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/core/services/seo.service';

const meta = {
  title: 'SBSC | Home Page',
  description: 'This is where you would most likely find me half the time',
};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setMetaTags(meta);
  }
}
