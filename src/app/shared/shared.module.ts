import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PostComponent } from './post/post.component';
@NgModule({
  declarations: [PostComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [MatIconModule, MatButtonModule, PostComponent],
})
export class SharedModule {}
