import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainScreenComponent } from 'src/app/landing/main-screen/main-screen.component';
import { HomeComponent } from 'src/app/landing/home/home.component';
import { ListComponent } from 'src/app/landing/list/list.component';
import { FriendsComponent } from 'src/app/landing/friends/friends.component';
import { LandingComponent } from 'src/app/landing/landing.component';

const routes: Routes = [
    { path: '', redirectTo: '/landing/dashboard', pathMatch: 'full' },
    { 
        path: 'landing', 
        component: LandingComponent, 
        children: [
            {path: 'dashboard', component: MainScreenComponent},
            {path: 'home', component: HomeComponent},
            {path: 'list', component: ListComponent},
            {path: 'friends', component: FriendsComponent}
        ]

    },
    { path: '**', redirectTo: 'landing', pathMatch: 'full' },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })



export class AppRoutingModule { }