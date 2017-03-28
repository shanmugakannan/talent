import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'action-item',
  templateUrl: './action-item.component.html',
  styleUrls: ['./action-item.component.css']
})

export class ActionItemComponent implements OnInit {

actionItem : string;
subactionItem : string;
comments : string;
duedate:string;

constructor() { 
      this.actionItem = "Job Rotation";
      this.subactionItem = "Move to different team in same BU";
      this.comments = "Performed performance tuning of query.Volunteered for Hackathons.Won spot Light award.Contributed.Performed performance tuning of query.Volunteer to PaypalGives.Volunteered for Hackathons.Won spot Light award";
      this.duedate = "20 Jun"
  }

  ngOnInit() {
  }

}
