import { provideRouter, RouterConfig } from '@angular/router';
import {ServiceDemoComponent} from "./components/service-demo/service-demo.component";

export const routes: RouterConfig = [
    { path: '', component: ServiceDemoComponent }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
