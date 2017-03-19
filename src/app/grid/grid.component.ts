import { Component, 
         OnInit,
         trigger,
         state,
         style,
         transition,
         animate,
         AfterViewInit, 
         ViewChild 
        } 
from '@angular/core';
import { DatatableComponent } from './data-table.component';
import { ApiService } from "../services/api.service";
import { GetEmployeeRatingService } from "../services/get-employee-rating.service";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
   animations: [
    trigger('pageState', [
      state('view', style({
        width: "95%"
      })),
      state('edit',   style({
        width: "25%"
      })),
      transition('inactive => active', animate('500ms')),
      transition('active => inactive', animate('500ms'))
    ])
  ]
})

export class GridComponent implements AfterViewInit  {
  @ViewChild(DatatableComponent)
  private grid : DatatableComponent;

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
  if(this.pageState == "edit"){
    this.grid.columns.forEach(element => {
     
     if(element.value == "emp_no" || element.value == "emp_name"){
        element.visible = true;
     }
     else{
       element.visible = false;
     }
    });
      
  }
}

ngAfterViewInit() {  
  }

}
