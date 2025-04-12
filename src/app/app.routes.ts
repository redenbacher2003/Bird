import { Routes } from '@angular/router';
import { SpeciesComponent } from './species/species.component';
import { HomeComponent } from './home/home.component';
import { BirdCompomentComponent } from './bird-compoment/bird-compoment.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'species', component: SpeciesComponent },
      { path: 'bird/:id', component: BirdCompomentComponent }       
    ]
  }
];
 


  