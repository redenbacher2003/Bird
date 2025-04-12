import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { DataaccessService } from '../dataaccess.service';
import { specieItem } from '../interface/items';
import { map } from 'rxjs';
import { NgFor, NgIf } from '@angular/common';
import { SpecieCardComponent } from '../specie-card/specie-card.component';
import { ButtonModule } from 'primeng/button';
import { Select } from 'primeng/select';
import { specieShowOption } from '../interface/items';
import { specieFilterOption } from '../interface/items'; // Importing the specieFilterOption interface
import { ScrollTopModule } from 'primeng/scrolltop';

@Component({
  selector: 'app-species',
  imports: [FormsModule, AutoCompleteModule, NgIf, NgFor, SpecieCardComponent, ButtonModule, Select, ScrollTopModule], // Importing necessary modules and components
  templateUrl: './species.component.html',
  styleUrl: './species.component.scss'
})
export class SpeciesComponent implements OnInit {
  
  selectedSpecie      : specieFilterOption   = {specieName : ''} // Holds the selected specie from the autocomplete
  selectedShowOption  : specieShowOption     = { name: '10', code: '10' }; // Default to 10 items
  filteredSpecies     : specieFilterOption[] = [];
  specieShowOptions   : specieShowOption[]   = [];
  allSpecies          : specieItem[]         = []; // Holds all species data for filtering

  constructor(private route: ActivatedRoute, private dataAccessService: DataaccessService)
  {}
   species! : specieItem[];  
   ngOnInit() {
    this.getSpecies('shuffle'); 

    this.specieShowOptions = [
      { name: '5', code: '5' },
      { name: '10', code: '10' },
      { name: '20', code: '20' },
      { name: '30', code: '30' },
      { name: '40', code: '40' },
      { name: '50', code: '50' },
      { name: 'All', code: 'all' }
    ]
   }        

   getSpecieList(arr: specieItem[], count: number, method : string): specieItem[] {

    let shuffled = [...arr]; 
    if (method === 'shuffle') 
      {
        shuffled.sort(() => 0.5 - Math.random()); 
      }
      else {
        shuffled.sort((a, b) => a.description.localeCompare(b.description)); // Sort by description
      }
     
    return shuffled.slice(0, count);
  }

  filterSpecie(event: AutoCompleteCompleteEvent) {

    let filtered: specieFilterOption[] = [];
    let query = event.query;
    
    for (let i = 0; i < this.allSpecies.length; i++) { 
      let specie = this.allSpecies[i]; 
      if (specie.description.toLowerCase().includes(query.toLowerCase())) { 
          filtered.push(
            { specieName: specie.description.trim()} // Create a filtered object with the specieName property
          ); 
      } 
    }  
    this.filteredSpecies = filtered;
    }

  getSpecies(method : string) : void {

    let nItem =  parseInt(this.selectedShowOption.code, 10); // Default to 10 if parsing fails
    
    this.dataAccessService.getSpecies()
    .pipe(map((data: specieItem[]) => this.getSpecieList(this.allSpecies = data, this.selectedShowOption.code === 'all' ? data.length : nItem, method)))
    .subscribe((data: specieItem[]) => {this.species = data;});
  }

  getSpecieByName() : void {

      this.species = this.allSpecies.filter(specie => specie.description.toLowerCase().trim() === this.selectedSpecie.specieName.toLowerCase().trim());
      
    }
}