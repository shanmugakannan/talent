import { Component, OnInit, Input } from '@angular/core';
import {DatatableComponent} from './data-table.component';

@Component({
  selector: 'column',
  template:``
})
export class ColumnComponent implements OnInit {
private hide:boolean;

@Input() value:string ;
@Input() header:string ;
@Input() 
set visible(isVisible: boolean) { 
    if(!isVisible) {this.hide = true} ;
  }

constructor(table: DatatableComponent) {
    table.addColumn(this)
  }

ngOnInit() {
}

}
