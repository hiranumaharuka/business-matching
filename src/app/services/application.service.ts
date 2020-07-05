import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApplicationWithAuthor, Application } from '../interfaces/application';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  url = environment.baseUrl;

  constructor(private http: HttpClient) {}

  createApplication(data: Omit<Application, 'applicationId' | 'authorId' | 'postId'>, authorId, postId) {
    return this.http
      .post(this.url + 'createapplication.php', { data, authorId, postId })
      .pipe(map((res) => res));
  }

  getApplications(): Observable<ApplicationWithAuthor[]> {
    return this.http.get<ApplicationWithAuthor[]>(this.url + 'applicationlist.php');
  }

  getApplication(id: number): Observable<ApplicationWithAuthor> {
    return this.http.get<ApplicationWithAuthor>(this.url + 'application.php?applicationId=' + id);
  }
}
