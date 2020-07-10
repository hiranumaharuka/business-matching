import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PostComponent } from './post/post.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [PostComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [
    MatIconModule,
    MatButtonModule,
    PostComponent,
    MatSnackBarModule,
    FlexLayoutModule,
  ],
})
export class SharedModule {}
