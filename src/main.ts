import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component';
import {APP_ROUTER_PROVIDERS} from "./app/app.routes";
import { ROUTER_DIRECTIVES } from '@angular/router';

if (process.env.ENV === 'production') {
    enableProdMode();
}
//noinspection TypeScriptValidateTypes
bootstrap(AppComponent, [ROUTER_DIRECTIVES, APP_ROUTER_PROVIDERS]).catch(err => console.error(err));