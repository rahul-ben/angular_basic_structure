import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AppRoutingModule } from './app-routing.module';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainScreenComponent } from 'src/app/landing//main-screen/main-screen.component';
import { LandingModule } from 'src/app/landing/landing.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TopNavComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule
    
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }