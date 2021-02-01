import { Directive,ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor: string | undefined;
  @Input() defaultColor:string | undefined
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight(null);
  }


 private  highlight(color:any){
    this.el.nativeElement.style.background = color;
  }
}
