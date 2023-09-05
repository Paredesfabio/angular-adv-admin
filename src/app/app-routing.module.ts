import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';

// Modules
import { PagesRoutingModule } from './pages/pages-routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [

    // { path: '/dashboard' , component: PagesRoutingModule},
    // { path: '/auth' , component: AuthRoutingModule},
    // { path: '/doctors' , component: DoctorRoutingModule},
    // { path: '/purchase' , component: PurchaseRoutingModule},
    { path: '' , redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '**' , component: NopagefoundComponent},
];


@NgModule({
    imports: [
        RouterModule.forRoot( routes ),
        PagesRoutingModule,
        AuthRoutingModule
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
