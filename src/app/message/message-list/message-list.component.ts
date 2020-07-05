import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicationWithAuthor } from 'src/app/interfaces/application';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss'],
})
export class MessageListComponent implements OnInit {
  messages$: Observable<
    ApplicationWithAuthor[]
  > = this.applicationService.getApplications();
  constructor(private applicationService: ApplicationService) {}

  ngOnInit() {}
}
