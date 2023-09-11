import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'app-increment',
    templateUrl: './increment.component.html',
    styleUrls: ['./increment.component.css']
})
export class IncrementComponent implements OnInit {

    ngOnInit() {
        this.btnClass = `btn ${this.btnClass}`;
    }

    @Input('increment') progress: number = 50;
    @Input('className') btnClass: string = 'btn-primary';

    @Output() emitOutputValue: EventEmitter<number> = new EventEmitter();

    changeValue(value: number) {
        if (this.progress >= 100 && value >= 0) {
            this.emitOutputValue.emit(100);
            return this.progress = 100;
        }

        if (this.progress <= 0 && value < 0) {
            this.emitOutputValue.emit(0);
            return this.progress = 0;
        }

        this.progress += value;
        let increment: number = this.progress += value;
        this.emitOutputValue.emit(this.progress);
        return increment
    }

    onChangeValue(newValue: number) {
        // if (newValue >= 100) {
        //     this.progress = 100;
        // } else if (newValue < 0) {
        //     this.progress = 0;
        // } else {
        //     this.progress = newValue;
        // }
        this.emitOutputValue.emit(newValue);
    }

}
