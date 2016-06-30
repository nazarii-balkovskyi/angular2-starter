import {provideRouter, RouterConfig} from "@angular/router";
import {ServiceDemoRoutes} from "./components/service-demo/service-demo.routes";
import {ComponentsDemoRoutes} from "./components/components-demo/components-demo.routes";
import {BindingsDemoRoutes} from "./components/bindings-demo/bindings-demo.routes";
import {PipesDemoRoutes} from "./components/pipes-demo/pipes-demo.routes";

export const routes: RouterConfig = [
    ...ComponentsDemoRoutes,
    ...BindingsDemoRoutes,
    ...ServiceDemoRoutes,
    ...PipesDemoRoutes
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
