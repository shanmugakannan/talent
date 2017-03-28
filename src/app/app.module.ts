import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { APP_CONFIG, AppConfig } from './app.config';
import { SelectListComponent } from './select-list/select-list.component';
import { SelectItemDirective } from './select-list/select-item.directive';
import { RateTalentComponent } from './rate-talent/rate-talent.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ResourceDetailComponent } from './resource-detail/resource-detail.component';
import { ActionItemComponent } from './action-item/action-item.component';
import { GridComponent } from './grid/grid.component';
import { DatatableComponent } from "./grid/data-table.component";
import { ColumnComponent } from "./grid/column.component";
import { ApiService } from "./services/api.service";
import { GetEmployeeRatingService } from "./services/get-employee-rating.service";

@NgModule({
  declarations: [
    AppComponent,
    SelectListComponent,
    SelectItemDirective,
    RateTalentComponent,
    TimelineComponent,
    ResourceDetailComponent,
    ActionItemComponent,
    GridComponent,
    DatatableComponent,
    ColumnComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ApiService,
    GetEmployeeRatingService,
    { provide: APP_CONFIG, useValue: AppConfig }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
