import {Component} from '@angular/core';
import {PowPipe} from './pipes/pow';

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    pipes: [PowPipe]
})
export class AppComponent {

}
