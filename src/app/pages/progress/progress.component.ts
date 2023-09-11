import { Component, Output } from '@angular/core';

@Component({
    selector: 'app-progress',
    templateUrl: './progress.component.html',
    styleUrls: ['./progress.component.css',]
})
export class ProgressComponent {

    progress1: number = 15;
    progress2: number = 35;

    get getPrgoress1() {
        return `${this.progress1}%`;
    }

    get getPrgoress2() {
        return `${this.progress2}%`;
    }

}
