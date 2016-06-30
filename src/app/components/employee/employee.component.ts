import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Employee} from "../../model/employee";

@Component({
    selector: 'employee',
    template: require('./employee.component.html')
})
export class EmployeeComponent {
    @Input() employee: Employee;
    @Output() edit:   EventEmitter<Employee> = new EventEmitter<Employee>();
    @Output() delete: EventEmitter<Employee> = new EventEmitter<Employee>();

    editEvent() {
        this.edit.emit(this.employee);
    }

    deleteEvent() {
        this.delete.emit(this.employee);
    }
}