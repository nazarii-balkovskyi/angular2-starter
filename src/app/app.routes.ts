import {RouterConfig, provideRouter} from "@angular/router";
import {HelloWorldComponent} from "./components/hello-world/hello-world.component";

export const routes: RouterConfig = [
    //route paths
    {
        path: '',
        component: HelloWorldComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];