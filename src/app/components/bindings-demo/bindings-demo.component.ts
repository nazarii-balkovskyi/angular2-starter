import { Component } from '@angular/core';

@Component({
    selector: 'bindings-demo',
    template: require('./bindings-demo.component.html')
})
export class BindingsDemoComponent {
    someProperty: string = '';
    someProperty2: string = '';
}