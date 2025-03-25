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

@Component({
  selector: 'app-species',
  imports: [FormsModule, AutoCompleteModule, NgIf, NgFor, SpecieCardComponent, ButtonModule, Select], 
  templateUrl: './species.component.html',
  styleUrl: './species.component.scss'
})
export class SpeciesComponent implements OnInit {
  
  selectedSpecie      : any;
  selectedShowOption  : specieShowOption  = { name: '10', code: '10' }; // Default to 10 items
  filteredSpecies     : string[]          = [];
  specieShowOptions   : specieShowOption[] = [];

  constructor(private route: ActivatedRoute, private dataAccessService: DataaccessService)
  {}
   species! : specieItem[];  
   ngOnInit() {
    this.getSpecies('shuffle'); // Fetch species data when the component initializes

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

   getRandomItems(arr: specieItem[], count: number, method : string): specieItem[] {

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
    let filtered: string[] = [];
    let query = event.query;
    console.log(query);
    for (let i = 0; i < this.species.length; i++) { 
      let specie = this.species[i]; 
      if (specie.description.toLowerCase().includes(query.toLowerCase())) { 
          filtered.push(specie.description.trim()); 
      } 
    }    
    this.filteredSpecies = filtered;
  }

  getSpecies(method : string) : void {

    let nItem =  parseInt(this.selectedShowOption.code, 10); // Default to 10 if parsing fails
    
    this.dataAccessService.getSpecies()
    .pipe(map((data: specieItem[]) => this.getRandomItems(data, this.selectedShowOption.code === 'all' ? data.length : nItem, method)))
    .subscribe((data: specieItem[]) => {this.species = data;});
  }
}