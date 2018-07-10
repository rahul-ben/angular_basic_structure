import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainScreenComponent } from 'src/app/main-screen/main-screen.component';
import { LandingComponent } from 'src/app/landing/landing.component';

const routes: Routes = [
    {
        path: 'landing',
        component: LandingComponent,
        children: [
            {path: '', redirectTo: '/landing/dashboard', pathMatch: 'full'},
            {path: 'dashboard', component: MainScreenComponent}
        ]
    }
];

export const LandingRoutingModule = RouterModule.forChild(routes);


