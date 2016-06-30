import { Component } from '@angular/core';
import {PowPipe} from '../../pipes/pow';

@Component({
    selector: 'pipes-demo',
    template: require('./pipes-demo.component.html'),
    pipes: [PowPipe]
})
export class PipesDemoComponent {
    power: number = 1;
    factor: number = 0;
}