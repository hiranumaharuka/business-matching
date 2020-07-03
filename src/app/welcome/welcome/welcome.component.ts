import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interfaces/post';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  hide = true;
  form = this.fb.group({
    userName: ['', [Validators.required, Validators.maxLength(40)]],
    mail: ['', [Validators.required, Validators.email]],
    pwd: ['', [Validators.required, Validators.minLength(8)]],
  });
  users$: Observable<User[]> = this.userService.getUsers();
  get nameControl() {
    return this.form.get('userName') as FormControl;
  }
  get mailControl() {
    return this.form.get('mail') as FormControl;
  }
  get pwdControl() {
    return this.form.get('pwd') as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private userService: UserService
  ) {}

  ngOnInit() {
  }

  submit() {
    const formData = this.form.value;
    this.authService.createUser(formData).subscribe(() => {
      this.snackBar.open('登録しました', null, {
        duration: 2000
      });
    });
  }
}
