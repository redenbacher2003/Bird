import { Routes } from '@angular/router';
import { SpeciesComponent } from './species/species.component';
import { HomeComponent } from './home/home.component';
import { BirdCompomentComponent } from './bird-compoment/bird-compoment.component';
import { DashbboardComponent } from './dashbboard/dashbboard.component';
export const routes: Routes = [
  {
    path: '',
    component: DashbboardComponent // Set DashbboardComponent as the default route
  },

  { path: 'species', component: SpeciesComponent },
  { path: 'bird/:id', component: BirdCompomentComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'species', component: SpeciesComponent },
      { path: 'bird/:id', component: BirdCompomentComponent },
      { path: 'dashboard', component: DashbboardComponent }
    ]
  }
];
 


  