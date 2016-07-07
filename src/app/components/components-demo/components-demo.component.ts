import {Component, OnInit} from "@angular/core";
import {VoteComponent} from "../vote/vote.component";

@Component({
    selector: 'component-demo',
    template: require('./components-demo.component.html'),
    directives: [VoteComponent]
})
export class ComponentsDemoComponent implements OnInit {
    question = 'Do you like Angular2?';
    voters = ['Andrew', 'Oksana', 'Nazar', 'Ivan'];

    private disagreed: number = 0;
    private agreed: number = 0;
    ngOnInit() {

    }

    onVote(agreed: boolean) {
        agreed ? this.agreed++ : this.disagreed++;
    }
}