import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailRoutingModule } from './post-detail-routing.module';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [PostDetailComponent, ApplicationFormComponent],
  imports: [
    CommonModule,
    PostDetailRoutingModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatInputModule,
    MatSelectModule,
  ],
})
export class PostDetailModule {}
