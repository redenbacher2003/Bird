import { Component, Input, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { bird, specieItem } from '../interface/items';
import { Popover } from 'primeng/popover';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { DataaccessService } from '../dataaccess.service'; // Importing the data access service

@Component({
  selector: 'app-specie-card',
  imports: [CardModule, ButtonModule, Popover, InputGroup, CommonModule, InputGroupAddonModule, InputTextModule], // Importing necessary modules and components
  templateUrl: './specie-card.component.html',
  styleUrl: './specie-card.component.scss'
})
export class SpecieCardComponent implements OnInit {
  @Input() specie!: specieItem;
  
  constructor(private dataAccessService: DataaccessService) { } // Injecting the data access service
  birds: bird[] = []; // This will hold the birds data fetched from the service

    ngOnInit(): void {
 
      this.dataAccessService.getBySpecieId(this.specie.specieId).subscribe((data : bird[]) => {
        this.birds = data;
      
      }  
     )
  }
}
