import { Injectable, Output, Directive } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { User } from '../interfaces/post';
import { EventEmitter } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  localUrl = environment.baseLocalUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  };
  redirectUrl = '/';
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

  createUser(user: User) {
    return this.http.post(this.localUrl + 'insert.php', user).pipe(
      map((res) => {
        this.getLoggedInName.emit(true);
      })
    );
  }

  public userlogin(data) {
    return this.http.post<any>(this.localUrl + 'login2.php', data).pipe(
      map((Users: User[]) => {
        const token = String(Users[0].id);
        this.setToken(token);
        this.getLoggedInName.emit(true);
        return Users;
      })
    );
  }

  // token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
    this.getLoggedInName.emit(false);
  }

  isLoggedIn() {
    const token = this.getToken();
    if (token != null) {
      return true;
    }
    return false;
  }
}
