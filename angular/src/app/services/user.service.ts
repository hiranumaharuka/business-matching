import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.baseLocalUrl;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url + 'list.php');
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.url + 'getById.php?id=' + id);
  }
}
