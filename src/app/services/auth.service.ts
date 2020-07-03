import { Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { User } from '../interfaces/post';
import { EventEmitter } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = environment.baseUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  };
  redirectUrl = '/';
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpClient) {}

  createUser(user: User) {
    return this.http
      .post(this.url + 'insert.php', user)
      .pipe(map((res) => res));
  }

  public userlogin(data) {
    console.log(data);
    return this.http
      .post<any>(this.url + 'login2.php', data)
      .pipe(
        map((Users) => {
          this.setToken(Users[0].name);
          this.getLoggedInName.emit(true);
          return Users;
        })
      );
  }

  // token
  setToken(token: string) {
    console.log(token);
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    const usertoken = this.getToken();
    console.log(usertoken);
    if (usertoken != null) {
      return true;
    }
    return false;
  }
}
