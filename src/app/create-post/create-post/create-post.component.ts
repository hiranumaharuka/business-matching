import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private fb: FormBuilder, private authService: AuthService) {
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

  submit() {
    console.log('作りました');
  }
}
