import { Component, Input, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { bird, specieItem } from '../interface/items';
import { Popover } from 'primeng/popover';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { DataaccessService } from '../dataaccess.service'; // Importing the data access service
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { birdFilterOption } from '../interface/items'; // Importing the bird filter interface
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-specie-card',
  imports: [CardModule,
            ButtonModule,
            Popover,
            CommonModule,
            InputGroupAddonModule,
            InputTextModule,
            AutoCompleteModule,
            FormsModule], // Importing necessary modules and components
  templateUrl: './specie-card.component.html',
  styleUrl: './specie-card.component.scss'
})
export class SpecieCardComponent implements OnInit {
  @Input() specie!: specieItem;

  
  constructor(private dataAccessService: DataaccessService, private router: Router) { } // Injecting the data access service
  selectedBird    : birdFilterOption   = {birdName : ''} // Holds the selected bird from the autocomplete
  filteredBirds   : birdFilterOption[] = [];
  birds           : bird[] = []; // This will hold the birds data fetched from the service
  allBirds        : bird[] = []; // This will hold all birds data for filtering

    ngOnInit(): void {
 
      this.dataAccessService.getBySpecieId(this.specie.specieId).subscribe((data : bird[]) => {
        this.birds = data;
        this.allBirds = data; // Store all birds data for filtering
      
      }  
     )
  }

    filterBirds(event: AutoCompleteCompleteEvent) {
  
      let filtered: bird[] = [];
      let query = event.query;
      
      for (let i = 0; i < this.allBirds.length; i++) { 
        let bird = this.allBirds[i]; 
        if (bird.name.toLowerCase().includes(query.toLowerCase())) { 
            filtered.push(bird); 
        } 
      }  
        this.birds = filtered;
    }
    
    resetBirds() {
      this.birds = [...this.allBirds]; 
    }

    onBirdClick(birdId: number) {
      console.log('Bird ID:', birdId);
      this.router.navigate(['/bird', birdId]); 
    }
  }
