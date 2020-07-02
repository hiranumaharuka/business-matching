import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent implements OnInit {
  form = this.fb.group({
    message: ['', [
      Validators.required,
      Validators.maxLength(450)
    ]]
  });

  get messageControl() {
    return this.form.get('message') as FormControl;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  submit() {
    console.log('object');
  }
}
