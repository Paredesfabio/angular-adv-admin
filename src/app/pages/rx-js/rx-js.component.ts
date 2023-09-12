import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, retry, interval, take, map, filter, Subscription } from 'rxjs';

@Component({
    selector: 'app-rx-js',
    templateUrl: './rx-js.component.html',
    styleUrls: ['./rx-js.component.css']
})
export class RxJSComponent implements OnDestroy {

    public intervalSubs: Subscription;

    constructor() {

        // this.returnObservable().pipe(
        //     retry(2)
        // )
        // .subscribe({
        //     next: (value) => console.log(value),
        //     error: (error) => console.error(error),
        //     complete: () => console.warn('complete')
        // });

        this.intervalSubs = this.returnInterval().subscribe(console.log);
    }

    ngOnDestroy(): void {
        this.intervalSubs.unsubscribe();
    }

    returnInterval() {
        return interval(500)
            .pipe(
                // take(10),
                map(value => value + 1),
                filter(value => (value % 2) === 0 ? true : false),
            );
    }

    returnObservable(): Observable<number> {
        let i = -1;
        const obs$ = new Observable<number>(observer => {
            const interval = setInterval(() => {
                i++;
                // emtimos el observer
                observer.next(i);

                if (i === 4) {
                    clearInterval(interval);
                    observer.complete();
                }

                if (i === 2) {
                    console.log('i equals 2');
                    observer.error('come error in 2');
                }
            }, 1000)
        });

        return obs$;
    }


}
