import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post, PostWithAuthor } from '../interfaces/post';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  url = environment.baseUrl;

  constructor(private http: HttpClient) {}

  createPost(data: Omit<Post, 'postId' | 'authorId'>, authorId) {
    return this.http
      .post(this.url + 'createpost.php', { data, authorId })
      .pipe(map((res) => res));
  }

  getPosts(): Observable<PostWithAuthor[]> {
    return this.http.get<PostWithAuthor[]>(this.url + 'postlist.php');
  }

  getPost(id: number): Observable<PostWithAuthor> {
    return this.http.get<PostWithAuthor>(this.url + 'post.php?postId=' + id);
  }
}
