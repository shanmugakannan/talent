import { Component, OnInit } from '@angular/core';
import { SelectListComponent } from '../select-list/select-list.component';
import { ListItem } from '../select-list/select-list.model';

@Component({
  selector: 'app-rate-talent',
  templateUrl: './rate-talent.component.html',
  styleUrls: ['./rate-talent.component.css']
})
export class RateTalentComponent implements OnInit {
  items : ListItem[];
  constructor() { 
    this.items = [
                   {"title":"Promotion",
                            "values":[{"text":"Due in less than 6 months","icon":"glyphicon glyphicon-hourglass"},
                                      {"text":"Due in 6 to 12 months","icon":"glyphicon glyphicon-time"},
                                      {"text":"Due in 12 to 18 months","icon":"glyphicon glyphicon-time"},
                                      {"text":"After 18 months only","icon":"glyphicon glyphicon-time"}]},
                   {"title":"Training",
                            "values":[{"text":"Technical training","icon":"glyphicon glyphicon-cog"},
                                      {"text":"Behavioural training","icon":"glyphicon glyphicon-eye-open"},
                                      {"text":"Domain training","icon":"glyphicon glyphicon-certificate"}]},
                   {"title":"Job Rotation",
                            "values":[{"text":"Coaching","icon":"glyphicon glyphicon-certificate"},
                                      {"text":"Mentoring","icon":"glyphicon glyphicon-user"},
                                      {"text":"Include in 2017 tracks","icon":"glyphicon glyphicon-ok-circle"},
                                      {"text":"Include in external tech forums","icon":"glyphicon glyphicon-link"},
                                      {"text":"others","icon":"glyphicon glyphicon-th-list"}]},
                   {"title":"Others",
                            "values":[{"text":"Move to different team in same BU","icon":"glyphicon glyphicon-retweet"},
                                      {"text":"Move to different BU","icon":"glyphicon glyphicon-log-in"},
                                      {"text":"Stretch assignment in different BU","icon":"glyphicon glyphicon-resize-full"}]}
                 ]
                }

  ngOnInit() {
  }

}
