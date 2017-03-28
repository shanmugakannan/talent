import {Directive,ElementRef,HostListener,Input} from '@angular/core';

@Directive({
    selector:'[select-item]'
})

export class SelectItemDirective{
   constructor(private el:ElementRef){}
   @Input('text') displayText:string;
   @Input('icon') displayImage : string;
   
   @HostListener('mouseenter') onmouseenter(){
       this.el.nativeElement.style.boxShadow = '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)';
       this.el.nativeElement.style.backgroundColor ='white';
   }

    @HostListener('mouseleave') onmouseleave(){
       this.el.nativeElement.style.boxShadow = null;
       this.el.nativeElement.style.backgroundColor = null;
   }

    
}