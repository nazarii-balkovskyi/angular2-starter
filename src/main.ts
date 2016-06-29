import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

if (process.env.ENV === 'production') {
    enableProdMode();
}
//noinspection TypeScriptValidateTypes
bootstrap(AppComponent, [ROUTER_DIRECTIVES]).catch(err => console.error(err));
