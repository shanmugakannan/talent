import { Component,HostListener,ElementRef,Input } from '@angular/core';
import { SelectItemDirective } from './select-item.directive';
import { ListItem } from './select-list.model'
@Component({
    selector:'select-list',
    templateUrl:'./select-list.component.html',
    styleUrls: ['select-list.component.css']
})

export class SelectListComponent
{
  constructor(){}
  @Input() lists : ListItem[];
}