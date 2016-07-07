import {Component} from "@angular/core";
import { Employee } from '../../model/employee';
import {EmployeeService} from "../../services/employee.service";
import {EmployeeComponent} from "../employee/employee.component";

@Component({
    selector: 'employee-list',
    template: require('./employee-list.component.html'),
    directives: [EmployeeComponent]
})
export class EmployeeListComponent {
    private currentEmployee: Employee;
    private employees: Array<Employee>;
    private editing: boolean = false;

    constructor(private _eService: EmployeeService) {
        this.cleanEmployee();
        this.employees = this._eService.getEmployees();
    }

    private cleanEmployee() {
        this.currentEmployee = new Employee('', '', 0, -1);
    }

    add() {
        if(this.editing) {
            this._eService.saveEmployee(this.currentEmployee);
        } else {
            this._eService.addEmployee(this.currentEmployee.firstName, this.currentEmployee.lastName, this.currentEmployee.age);
        }
        this.editing = false;
        this.cleanEmployee();
    }

    cancel() {
        this.editing = false;
        this.cleanEmployee();
    }

    delete(employee: Employee) {
        this._eService.removeEmployee(employee);
    }

    edit(employee: Employee) {
        this.currentEmployee.firstName = employee.firstName;
        this.currentEmployee.lastName = employee.lastName;
        this.currentEmployee.age = employee.age;
        this.currentEmployee.id = employee.id;

        this.editing = true;
    }
}