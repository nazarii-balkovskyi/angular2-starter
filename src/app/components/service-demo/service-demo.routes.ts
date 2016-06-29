import { RouterConfig } from '@angular/router';
import {ServiceDemoComponent} from "./service-demo.component";

export const ServiceDemoRoutes: RouterConfig = [
    {
        path: 'service-demo',
        component: ServiceDemoComponent
    },
    {
        path: '',
        redirectTo: 'service-demo',
        terminal: true
    }
];