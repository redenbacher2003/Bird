import { Component } from '@angular/core';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { MenuItem } from 'primeng/api';
@Component({
  imports: [SplitButtonModule, FormsModule, InputTextModule, FloatLabel], 
  templateUrl: './bird-search.component.html',
  styleUrl: './bird-search.component.scss'
})
export class BirdSearchComponent {

  items: MenuItem[] = [];
  value3: string | undefined;
  constructor() { 
 
  this.items = [
      { label: 'Name'},
      { label: 'Food'},
      { label: 'Habitat'}
    ];
  }

  search() : void{
  
  }


}

