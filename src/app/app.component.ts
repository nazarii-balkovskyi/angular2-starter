import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router'
import { PowPipe } from './pipes/pow';

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    styles: [ require('./app.component.css') ],
    pipes: [PowPipe],
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
    constructor(private router: Router) {
        console.log(router);
    }
}
