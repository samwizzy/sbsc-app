import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FooterService } from 'src/app/core/services/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  startDate: number = new Date().getFullYear();
  show$!: Observable<boolean>;

  constructor(private footerService: FooterService) {}

  ngOnInit(): void {
    this.show$ = this.footerService.footerState$;
  }
}
