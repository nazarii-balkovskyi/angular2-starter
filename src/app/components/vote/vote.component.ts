import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'vote',
    template: require('./vote.component.html')
})
export class VoteComponent {
    private _voterName: string;
    @Output() voted: EventEmitter<boolean> = new EventEmitter<boolean>();
    private voteResult: boolean;
    private done: boolean = false;

    @Input()
    set voterName(value: string) {
        this._voterName = (value && value.trim()) || '<no name set>';
    }

    vote(voted: boolean) {
        this.voted.emit(voted);
        this.voteResult = voted;
        this.done = true;
    }
}