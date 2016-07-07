import { RouterConfig } from '@angular/router';
import {ServiceDemoComponent} from './service-demo.component';
import {EmployeeListComponent} from "../employee-list/employee-list.component";

export const ServiceDemoRoutes: RouterConfig = [
    {
        path: 'service-demo',
        component: ServiceDemoComponent,
        children: [
            {
                path: 'employees',
                component: EmployeeListComponent
            },
            {
                path: '',
                redirectTo: 'employees',
                terminal: true
            }
        ]
    }
];