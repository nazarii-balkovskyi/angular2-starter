import { RouterConfig } from '@angular/router';
import {ComponentsDemoComponent} from "./components-demo.component";

export const ComponentsDemoRoutes: RouterConfig = [
    {
        path: 'components-demo',
        component: ComponentsDemoComponent
    },
    {
        path: '',
        redirectTo: 'components-demo',
        terminal: true
    }
];