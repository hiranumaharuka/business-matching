import { Component, OnInit, Input } from '@angular/core';
import { PostWithAuthor } from 'src/app/interfaces/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: PostWithAuthor;
  constructor() { }

  ngOnInit() {
  }

}
