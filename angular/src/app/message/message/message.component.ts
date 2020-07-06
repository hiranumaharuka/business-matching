import { Component, OnInit, Input } from '@angular/core';
import { ApplicationWithAuthor } from 'src/app/interfaces/application';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  @Input() message: ApplicationWithAuthor;
  name: string;
  constructor() {}

  ngOnInit() {
    this.name = this.message.userName.slice(0, 1);
  }
}
