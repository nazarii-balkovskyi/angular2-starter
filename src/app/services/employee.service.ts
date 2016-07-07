import {Employee} from "../model/employee";
import {Injectable} from "@angular/core";

@Injectable()
export class EmployeeService {
    private _employees: Array<Employee> = [
        {firstName: 'Nazarii', lastName: 'Balkovskyi', age: 23, id: 1}
    ];

    public getEmployees(): Array<Employee> {
        return this._employees;
    }

    public addEmployee(firstName: string, lastName: string, age: number): Employee {
        let employee = new Employee(firstName, lastName, age);
        employee.id = this._employees[this._employees.length -1].id + 1;
        this._employees.push(employee);
        return employee;
    }

    public removeEmployee(employee: Employee) {
        for(let i = 0; i < this._employees.length; i++) {
            if(employee.id == this._employees[i].id) {
                this._employees.splice(i, 1);
            }
        }
    }

    public saveEmployee(employee: Employee) {
        for(let i = 0; i < this._employees.length; i++) {
            if(employee.id == this._employees[i].id) {
                this._employees[i] = employee;
            }
        }
    }
}