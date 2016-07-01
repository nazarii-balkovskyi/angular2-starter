import {Component} from "@angular/core";

@Component({
    selector: 'hello-world',
    template: require('./hello-world.component.html')
})
export class HelloWorldComponent {
    title: string = 'Hello world from component!';
}