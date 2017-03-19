import { Component, OnInit, Input } from '@angular/core';
import {DatatableComponent} from './data-table.component';

@Component({
  selector: 'column',
  template:``
})
export class ColumnComponent implements OnInit {
private _data_field_name;
private _column_header;
private _is_visible;

@Input() 
set value(value: string) {
    this._data_field_name = value;
  }
get value(): string { return this._data_field_name; }

@Input() 
set header(header: string) {
    this._column_header = header;
  }
get header(): string { return this._column_header; }

@Input() 
set visible(isVisible: boolean) {
    this._is_visible = isVisible;
  }
get visible(): boolean { return this._is_visible; }
  

constructor(table: DatatableComponent) { 
    table.addColumn(this)
  }

ngOnInit() {
}

}
