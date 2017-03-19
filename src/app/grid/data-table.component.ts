import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { ColumnComponent } from './column.component';
import { GridComponent } from './grid.component';

@Component({
  selector: 'datatable',
  templateUrl: 'data-table.component.html',
  styleUrls: ['grid.component.css']
})
export class DatatableComponent  implements OnInit  {
 constructor(){    
 }

  @Input() dataset; 
  @Output() ratebtnClick = new EventEmitter<string>();

  columns: ColumnComponent[] = [];
 
  addColumn(column:ColumnComponent){
    this.columns.push(column);
  }

  getData(){
      return this.dataset;
    }
    
 OnratebtnClick(args:string){
  this.ratebtnClick.emit(args);
 }   
  ngOnInit() {
  }
}