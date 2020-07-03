import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  loginbtn: boolean;
  logoutbtn: boolean;

  constructor(private authService: AuthService) {
    authService.getLoggedInName.subscribe((name) => this.changeName(name));
    if (this.authService.isLoggedIn()) {
      this.loginbtn = false;
      this.logoutbtn = true;
    } else {
      this.loginbtn = true;
      this.logoutbtn = false;
    }
  }

  ngOnInit() {}
  private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
  }

  logout() {
    this.authService.deleteToken();
    window.location.href = window.location.href;
  }
}
