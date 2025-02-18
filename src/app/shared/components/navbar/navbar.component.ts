import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  showMobile: boolean = false;
  moreMenu: boolean = false;
  userId: string | null = null;
  tempImg = '/assets/images/avatar.jpeg'; //https://i.pravatar.cc/300

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userId = this.authService.getAuthId;
  }

  logout(): void {
    this.authService.logout();
  }
}
