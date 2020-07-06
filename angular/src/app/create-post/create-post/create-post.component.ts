import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  isLogin: boolean;
  form = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(40)]],
    content: ['', [Validators.required, Validators.maxLength(450)]],
    category: [''],
  });

  get titleControl() {
    return this.form.get('title') as FormControl;
  }
  get contentControl() {
    return this.form.get('content') as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private postService: PostService,
    private snackBar: MatSnackBar
  ) {
    authService.getLoggedInName.subscribe((name) => this.changeName(name));
    if (this.authService.isLoggedIn()) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  }

  ngOnInit() {}

  private changeName(name: boolean): void {
    this.isLogin = name;
  }

  create(form: NgForm) {
    const data = this.form.value;
    const authorId = Number(this.authService.getToken());
    this.postService
      .createPost(
        { title: data.title, content: data.content, category: data.category },
        authorId
      )
      .subscribe(() => {
        this.snackBar.open('作成しました', null, {
          duration: 2000,
        }),
        form.resetForm(),
          // tslint:disable-next-line: no-unused-expression
          (err) => {
            console.log(err);
          };
      });
  }
}
