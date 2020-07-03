import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  form = this.fb.group({
    mail: ['', [Validators.required, Validators.email]],
    pwd: ['', [Validators.required]],
  });
  invalidLogin = false;
  loginbtn: boolean;
  logoutbtn: boolean;
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
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {}

  login() {
    const formData = this.form.value;
    this.authService
      .userlogin(formData)
      // .pipe(first())
      .subscribe(
        (data) => {
          const redirect = this.authService.redirectUrl
            ? this.authService.redirectUrl
            : '/';
          this.router.navigate([redirect]);
        },
        (error) => {
          this.invalidLogin = true;
        }
      );
  }
}
