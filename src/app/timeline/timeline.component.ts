import { Component, OnInit } from '@angular/core'; 
import { ListItem } from '../select-list/select-list.model';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  items : ListItem[];
  constructor() { 
    this.items = [
                   {"title":"Promotion",
                            "values":[{"text":"Due in less than 6 months","icon":"fa fa-hourglass-half"},
                                      {"text":"Due in 6 to 12 months","icon":"glyphicon glyphicon-time"},
                                      {"text":"Due in 12 to 18 months","icon":"fa fa-clock-o"},
                                      {"text":"After 18 months only","icon":"fa fa-hourglass"}]},
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
                            "values":[{"text":"Move to different team in same BU","icon":"fa fa-random"},
                                      {"text":"Move to different BU","icon":"fa fa-exchange"},
                                      {"text":"Stretch assignment in different BU","icon":"fa fa-arrows-h"}]}
                 ]
                }

  ngOnInit() {
  }

}
