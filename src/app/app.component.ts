import { Component, VERSION } from '@angular/core';
import { SegmentService } from 'ngx-segment-analytics';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(private segment: SegmentService) {}

  public sendIdentifyData() {
    this.segment.identify('123', {
      name: 'Michael Brown',
      email: 'mbrown@example.com',
    });
  }

  public sendTrackData() {}

  public sendPageData() {}
}
