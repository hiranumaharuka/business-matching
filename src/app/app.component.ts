import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'business-matching';
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

  private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
  }

  logout() {
    this.authService.deleteToken();
    window.location.href = window.location.href;
  }
}
