import { Routes } from '@angular/router';
import { SpeciesComponent } from './species/species.component';
import { HomeComponent } from './home/home.component';
import { BirdCompomentComponent } from './bird-compoment/bird-compoment.component';
import { DashbboardComponent } from './dashbboard/dashbboard.component';
import { BirdSearchComponent } from './bird-search/bird-search.component';
import { LogInComponent } from './log-in/log-in.component';
import { AuthGuard } from './auth.guard';
import { application } from 'express';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
export const routes: Routes = [
  { path: '', component: LogInComponent }, // default route
  { path: 'login', component: LogInComponent },
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'dashboard',component: DashbboardComponent, canActivate: [AuthGuard]},
      { path: 'species', component: SpeciesComponent, canActivate: [AuthGuard] },
      { path: 'bird/:id', component: BirdCompomentComponent, canActivate: [AuthGuard] },
      { path: 'bird-search', component: BirdSearchComponent, canActivate: [AuthGuard] },
      { path : 'profile', component: UserProfileComponent, canActivate: [AuthGuard] }
      
    ]
  },
 
];
 


  