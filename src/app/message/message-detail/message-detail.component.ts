import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicationWithAuthor } from 'src/app/interfaces/application';
import { ActivatedRoute } from '@angular/router';
import { ApplicationService } from 'src/app/services/application.service';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.scss'],
})
export class MessageDetailComponent implements OnInit {
  message$: Observable<ApplicationWithAuthor>;
  applicationId: number;
  constructor(
    private route: ActivatedRoute,
    private applicationService: ApplicationService
  ) {}

  ngOnInit() {
    this.applicationId = Number(
      this.route.snapshot.paramMap.get('applicationId')
    );
    this.message$ = this.applicationService
      .getApplication(this.applicationId)
      .pipe(map((data) => data[0]));
  }
}
