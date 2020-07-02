import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  form = this.fb.group({
    title: ['', [
      Validators.required,
      Validators.maxLength(40)
    ]],
    content: ['', [
      Validators.required,
      Validators.maxLength(450)
    ]],
    category: ['']
  });

  get titleControl() {
    return this.form.get('title') as FormControl;
  }
  get contentControl() {
    return this.form.get('content') as FormControl;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  submit() {
    console.log('object');
  }
}
