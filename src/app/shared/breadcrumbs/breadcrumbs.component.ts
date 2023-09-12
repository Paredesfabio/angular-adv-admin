import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styles: [
    ]
})
export class BreadcrumbsComponent implements OnDestroy {

    public titlePage: string = 'AdminProFP';
    public titleSubs$: Subscription;

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) {
        // console.log(route.snapshot.children[0].data);
        this.titleSubs$ = this.getRouteData()
                            .subscribe((event: any) => {
                                this.titlePage = event.title;
                                document.title = `AdminProFP ${this.titlePage}`;
                            });
    }

    ngOnDestroy(): void {
        this.titleSubs$.unsubscribe();
    }

    getRouteData() {
        return this.router.events
        .pipe(
            filter( event => event instanceof ActivationEnd && event.snapshot.firstChild === null),
            map( event => event instanceof ActivationEnd && event.snapshot.data),
        );
    }

}
