import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SelectListComponent } from './select-list/select-list.component';
import { SelectItemDirective } from './select-list/select-item.directive';
import { RateTalentComponent } from './rate-talent/rate-talent.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ResourceDetailComponent } from './resource-detail/resource-detail.component';
import { ActionItemComponent } from './action-item/action-item.component';


@NgModule({
  declarations: [
    AppComponent,SelectListComponent,SelectItemDirective,RateTalentComponent,TimelineComponent,ResourceDetailComponent, ActionItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
