import {provideRouter, RouterConfig} from "@angular/router";
import {ServiceDemoRoutes} from "./components/service-demo/service-demo.routes";
import {ComponentsDemoRoutes} from "./components/components-demo/components-demo.routes";
import {BindingsDemoRoutes} from "./components/bindings-demo/bindings-demo.routes";
import {PipesDemoRoutes} from "./components/pipes-demo/pipes-demo.routes";
import {LiveCodingRoutes} from "./components/live-codding/live-coding.routes";
import {DirectivesDemoRoutes} from "./components/directives-demo/directives-demo.routes";

export const routes: RouterConfig = [
    ...ComponentsDemoRoutes,
    ...BindingsDemoRoutes,
    ...ServiceDemoRoutes,
    ...PipesDemoRoutes,
    ...LiveCodingRoutes,
    ...DirectivesDemoRoutes
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
