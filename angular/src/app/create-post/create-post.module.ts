import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostRoutingModule } from './create-post-routing.module';
import { CreatePostComponent } from './create-post/create-post.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [CreatePostComponent],
  imports: [
    CommonModule,
    CreatePostRoutingModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatInputModule,
    MatSelectModule,
  ],
})
export class CreatePostModule {}
