import {Component, OnInit} from "@angular/core";
import {Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'live-code',
    template: require('./live-coding.component.html')
})
export class LiveCodeComponent implements OnInit, CanActivate {
    //here should be some live demo coding
    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        console.log('Can Activate: ', route, state);
        return Observable.create(confirm('Are you sure?'));
    }

    ngOnInit() {
        console.log('On init hook');
    }
}