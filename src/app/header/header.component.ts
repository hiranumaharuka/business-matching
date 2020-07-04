import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLogin: boolean;

  constructor(private authService: AuthService) {
    authService.getLoggedInName.subscribe((name) => this.changeName(name));
    if (this.authService.isLoggedIn()) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  }

  ngOnInit() {}
  private changeName(name: boolean): void {
    this.isLogin = name;
  }

  logout() {
    this.authService.deleteToken();
    window.location.href = window.location.href;
  }
}
