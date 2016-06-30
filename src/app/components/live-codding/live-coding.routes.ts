import {RouterConfig} from "@angular/router";
import {LiveCodeComponent} from "./live-coding.component";

export const LiveCodingRoutes: RouterConfig = [
    {
        path: 'live',
        component: LiveCodeComponent
    }
];