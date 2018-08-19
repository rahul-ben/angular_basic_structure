import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { SideNavComponent } from 'src/app/side-nav/side-nav.component';
import { TopNavComponent } from 'src/app/top-nav/top-nav.component';
import { FriendsComponent } from './friends/friends.component';
import { LandingComponent } from 'src/app/landing/landing.component';
import { landingRouteModule } from 'src/app/landing/landing-route.module'
import { MainScreenComponent } from 'src/app/landing/main-screen/main-screen.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [
    landingRouteModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule
  ],
  declarations: [
    HomeComponent, 
    ListComponent, 
    FriendsComponent, 
    MainScreenComponent, 
    LandingComponent,
    SideNavComponent,
    TopNavComponent
  ]
})

export class LandingModule { }
