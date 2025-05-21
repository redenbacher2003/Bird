import { Component } from '@angular/core';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { MenuItem } from 'primeng/api';
import { DataaccessService } from '../dataaccess.service';
import { Router, RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { birdWithFact } from '../interface/items';
import { ButtonModule } from 'primeng/button';
import { CommonModule, NgIf } from '@angular/common'; 
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { TableRowCollapseEvent, TableRowExpandEvent } from 'primeng/table';
@Component({
  imports: [SplitButtonModule,
            FormsModule,
            InputTextModule,
            FloatLabel,
            TableModule,
            ButtonModule,
            NgIf,
            Toast,
            RouterModule], 
  templateUrl: './bird-search.component.html',
  styleUrl: './bird-search.component.scss',
  providers: [MessageService]
})
export class BirdSearchComponent {

  items: MenuItem[] = []; 
  selectSearchBy: string | undefined;
  searchValue : string | undefined;
  searchResults: birdWithFact[] = [];

  constructor(private messageService: MessageService, private dataAccessService : DataaccessService, private router: Router) { 
 
  this.items = [
      { label: 'Name', command: () => this.selectSearchBy = 'Name' },
      { label: 'Food', command: () => this.selectSearchBy = 'Food' },
      { label: 'Habitat', command: () => this.selectSearchBy = 'Habitat' }
    ];
    this.selectSearchBy = 'Name';
  }

  search() : void {
    this.searchResults = [];
    if (this.searchValue) {
        this.dataAccessService.getBirdsBy(this.selectSearchBy!.toLowerCase(), this.searchValue!).subscribe((data) => {
        this.searchResults = data;
        this.show()
      }
    )

      
    }
  }
  show() {
    this.messageService.add({ severity: 'success', summary: 'Info', detail: 'Found ' + this.searchResults.length + ' bird/s', life: 3000 });
  }

  goToBird(birdId: number) {
  this.router.navigate(['/bird', birdId]);
}

}

