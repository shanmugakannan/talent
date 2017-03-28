import { Component, OnInit } from '@angular/core'; 
import { ListItem } from '../select-list/select-list.model';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  items : ListItem[];
  year:Date;
  yearText : number;
  monthText: string;
  rating:string;
  ratingSummary:string;
  constructor() { 
      var months : string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
      this.year = new Date();
      var monthNumber = this.year.getMonth();
      this.monthText = months[monthNumber];
      this.yearText =this.year.getFullYear();
      this.rating = "Amongst the best performance";
      this.ratingSummary ="Performed performance tuning of query.Volunteered for Hackathons.Won spot Light award.Contributed.Performed performance tuning of query.Volunteer to PaypalGives.Volunteered for Hackathons.Won spot Light award";
    }

  ngOnInit() {
  }

}
