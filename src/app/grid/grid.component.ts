import { Component, OnInit,
         trigger,
         state,
         style,
         transition,
         animate } from '@angular/core';
import { ApiService } from "../services/api.service";
import { GetEmployeeRatingService } from "../services/get-employee-rating.service";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
   animations: [
    trigger('pageState', [
      state('view', style({
        width: "100%",
        margin: "2%",
        textalign: "left"
      })),
      state('edit',   style({
        width: "25%"
      })),
      transition('inactive => active', animate('500ms')),
      transition('active => inactive', animate('500ms'))
    ])
  ]
})
export class GridComponent implements OnInit {
  pageState='view';
  Data : any = [];
  constructor(private dataservice :GetEmployeeRatingService){
    this.dataservice.getEmployeeRating()
        .subscribe(res => this.Data = res.json())
  }

 private changState(state:string){
      this.pageState = state;
  }

OnRateEmployee(id:string)
{
  this.changState('edit');
}

ngOnInit() {
}

}
