import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, PostWithAuthor } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts$: Observable<PostWithAuthor[]> = this.postService.getPosts();
  constructor(private postService: PostService) { }

  ngOnInit() {
  }

}
