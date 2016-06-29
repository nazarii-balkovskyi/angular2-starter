import { provideRouter, RouterConfig } from '@angular/router';

export const routes: RouterConfig = [
    { path: '', component: RouterConfig }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
