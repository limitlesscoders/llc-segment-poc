import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
// Import the Segment module
import { SegmentModule } from 'ngx-segment-analytics';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SegmentModule.forRoot({
      apiKey: 'WRITE_KEY',
      debug: true,
      loadOnInitialization: true,
    }),
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
