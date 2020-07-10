import { Injectable, Output } from '@angular/core';
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
  url = environment.baseUrl;
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
    return this.http
      .post(this.url + 'insert.php', user)
      .pipe(map((res) => res));
  }

  public userlogin(data) {
    return this.http.post<any>(this.url + 'login2.php', data).pipe(
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
    console.log('token', token);
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    const token = this.getToken();
    if (token != null) {
      return true;
    }
    return false;
  }
}
