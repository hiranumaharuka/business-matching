import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss'],
})
export class ApplicationFormComponent implements OnInit {
  isLogin: boolean;
  form = this.fb.group({
    message: ['', [Validators.required, Validators.maxLength(450)]],
  });

  get messageControl() {
    return this.form.get('message') as FormControl;
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
    console.log('投稿しました');
  }
}
