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
empId: number;
grade: string;
tenure: string;
  constructor() {
this.LastName = "Natarajapillai";
this.firstName = "Shanmugakannan";
this.samId = "snatarajapillai";
this.empId = 2754;
this.grade = "AWF";
this.tenure = "1";
   }

  ngOnInit() {
  }

}
