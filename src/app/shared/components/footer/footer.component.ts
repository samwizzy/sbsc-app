import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  startDate: number = new Date().getFullYear();
  show$!: Observable<boolean>;

  constructor() {}

  ngOnInit(): void {}
}
