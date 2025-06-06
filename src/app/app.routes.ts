import { Routes } from '@angular/router';
import { SpeciesComponent } from './species/species.component';
import { HomeComponent } from './home/home.component';
import { BirdCompomentComponent } from './bird-compoment/bird-compoment.component';
import { DashbboardComponent } from './dashbboard/dashbboard.component';
import { BirdSearchComponent } from './bird-search/bird-search.component';
import { LogInComponent } from './log-in/log-in.component';
export const routes: Routes = [
  {
    path: '',
    component: DashbboardComponent // Set DashbboardComponent as the default route
  },
  { path: 'dashboard',component: DashbboardComponent},
  { path: 'species', component: SpeciesComponent },
  { path: 'bird/:id', component: BirdCompomentComponent },
  { path: 'bird-search', component: BirdSearchComponent },
  { path: 'login', component: LogInComponent } // Add the login route

  ];
 


  