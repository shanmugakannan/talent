import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'resource-detail',
  templateUrl: './resource-detail.component.html',
  styleUrls: ['./resource-detail.component.css']
})
export class ResourceDetailComponent implements OnInit {
LastName : string;
firstName: string;
samId: string;
emp_no: number;
grade: string;
tenure: string;
  constructor() {
this.emp_no = 2754;
this.grade = "AWF";
this.tenure = "1";
   }

  ngOnInit() {
  }

}
