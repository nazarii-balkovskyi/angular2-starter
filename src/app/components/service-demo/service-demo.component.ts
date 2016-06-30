import {Component} from "@angular/core";
import {EmployeeService} from "../../services/employee.service";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    selector: 'service-demo',
    template: require('./service-demo.component.html'),
    providers: [EmployeeService],
    directives: [ROUTER_DIRECTIVES]
})
export class ServiceDemoComponent {

}
