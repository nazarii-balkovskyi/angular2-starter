import {Component} from '@angular/core'
import {YellowDirective} from "../../directives/yellow.directive";
import {UnlessDirective} from "../../directives/unless.directive";

@Component({
    selector: 'directive-demos',
    template: require('./directives-demo.component.html'),
    directives: [YellowDirective, UnlessDirective]
})
export class DirectivesDemoComponent {
    show: boolean = false;
}