import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  showMobile: boolean = false;
  userId: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userId = this.authService.getAuthId ?? '';
  }

  logout(): void {
    this.authService.logout();
  }
}
