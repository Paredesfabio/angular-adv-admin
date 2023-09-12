import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { PromisesComponent } from './promises/promises.component';
import { TestComponent } from './test/test.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { RxJSComponent } from './rx-js/rx-js.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent, data: { title: 'Dashboard'}},
            { path: 'progress', component: ProgressComponent, data: { title: 'Progress'}},
            { path: 'graphic1', component: Graphic1Component, data: { title: 'Graphics'}},
            { path: 'promises', component: PromisesComponent, data: { title: 'Promises'}},
            { path: 'account-settings', component: AccountSettingsComponent, data: { title: 'Settings'}},
            { path: 'test', component: TestComponent, data: { title: 'Test'}},
            { path: 'rxjs', component: RxJSComponent, data: { title: 'RxJS'}},
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes)] ,
    exports: [ RouterModule ]
})
export class PagesRoutingModule { }
