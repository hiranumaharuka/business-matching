import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ApplicationService } from 'src/app/services/application.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss'],
})
export class ApplicationFormComponent implements OnInit {
  isLogin: boolean;
  form = this.fb.group({
    content: ['', [Validators.required, Validators.maxLength(450)]],
  });
  postId: number;
  get messageControl() {
    return this.form.get('content') as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private applicationService: ApplicationService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {
    authService.getLoggedInName.subscribe((name) => this.changeName(name));
    if (this.authService.isLoggedIn()) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  }

  ngOnInit() {
    this.postId = Number(this.route.snapshot.queryParamMap.get('id'));
  }

  private changeName(name: boolean): void {
    this.isLogin = name;
  }

  apply(form: NgForm) {
    const data = this.form.value;
    const authorId = Number(this.authService.getToken());
    this.applicationService
      .createApplication({ content: data.content }, authorId, this.postId)
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
