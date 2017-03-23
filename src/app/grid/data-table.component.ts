import { Component, OnInit, Input,Output,EventEmitter,trigger,state,style,transition,animate } from '@angular/core';
import { ColumnComponent } from './column.component';
import { GridComponent } from './grid.component';

@Component({
  selector: 'datatable',
  templateUrl: 'data-table.component.html',
  styleUrls: ['grid.component.css'],
   animations: [
    trigger('pageState', [
      state('view', style({
        width: "95%"
      })),
      state('edit',   style({
          width: "50%"
      })),
      transition('view => edit', animate('500ms')),
      transition('edit => view', animate('500ms'))
    ])
  ]
})
export class DatatableComponent  implements OnInit  {
 constructor(){    
 }
  pageState:string;
  @Input() dataset; 
  @Output() ratebtnClick = new EventEmitter<string>();
  isEditMode:boolean;
  columns: ColumnComponent[] = [];
 
  addColumn(column:ColumnComponent){
    this.columns.push(column);
  }

  getData(){
      return this.dataset;
    }
   
 OnratebtnClick(args:string){
  this.changState('edit');  
  this.ratebtnClick.emit(args);
 }   

 private changState(state:string){
      this.pageState = state;
      this.isEditMode = true;
  }

  ngOnInit() {
    this.pageState='view';
  }

}