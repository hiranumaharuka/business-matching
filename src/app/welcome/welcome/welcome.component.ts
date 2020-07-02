import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  form = this.fb.group({
    name: ['', [
      Validators.required,
      Validators.maxLength(40)
    ]],
    mail: ['', [
      Validators.required,
      Validators.email
    ]],
    pwd: ['', [Validators.required]]
  });

  get nameControl() {
    return this.form.get('name') as FormControl;
  }
  get mailControl() {
    return this.form.get('mail') as FormControl;
  }
  get pwdControl() {
    return this.form.get('pwd') as FormControl;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  submit() {
    console.log('object');
  }
}
