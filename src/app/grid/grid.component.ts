import { Component,OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { DatatableComponent } from './data-table.component';
import { ApiService } from "../services/api.service";
import { GetEmployeeRatingService } from "../services/get-employee-rating.service";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements AfterViewInit  {
  @ViewChild(DatatableComponent)
  private grid : DatatableComponent;

  Data : any = [];
  constructor(private dataservice :GetEmployeeRatingService){
    this.dataservice.getEmployeeRating()
        .subscribe(res => this.Data = res.json())
  }

OnRateEmployee(id:string)
{
   this.grid.columns.forEach(element => {
     if(element.value == "emp_name" || element.value == "emp_no"){
        element.visible = true;
     }
     else{
       element.visible = false;
     }
    });
}

ngAfterViewInit() {  
  }

}
