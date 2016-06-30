import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[yellow]' })
export class YellowDirective {
    constructor(el: ElementRef) {
        el.nativeElement.style.backgroundColor = 'yellow';
    }
}