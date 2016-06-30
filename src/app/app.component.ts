import {Component, ViewEncapsulation} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router'
import { PowPipe } from './pipes/pow';

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    styles: [ require('./app.component.css') ],
    pipes: [PowPipe],
    directives: [ROUTER_DIRECTIVES],
    encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
    constructor(private router: Router) {
        console.log(this.router);
    }
}
