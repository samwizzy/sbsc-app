import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/core/services/seo.service';

const meta = {
  title: 'SBSC | My Contact Us',
  description:
    'Lets help you create that bespoke application, find us here or call us for any assistance.',
};

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
})
export class ContactusComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.setMetaTags(meta);
  }
}
