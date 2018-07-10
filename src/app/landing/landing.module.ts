import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { FriendsComponent } from './friends/friends.component';
import { MainScreenComponent } from 'src/app/landing/main-screen/main-screen.component';

@NgModule({
  imports: [
  ],
  declarations: [HomeComponent, ListComponent, FriendsComponent, MainScreenComponent]
})

export class LandingModule { }
