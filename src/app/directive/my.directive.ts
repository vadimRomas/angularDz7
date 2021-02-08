import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appMy]'
})
export class MyDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.border = 'solid';
  }

}
