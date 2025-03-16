import { CommonModule} from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { MenuItem } from '../interface/items';
import { DataaccessService } from '../dataaccess.service';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-left-component',
  imports: [MenuModule, ToastModule, CommonModule, PanelMenuModule],
  standalone: true,
  templateUrl: './left-component.component.html',
  styleUrl: './left-component.component.scss'
})
export class LeftComponentComponent implements OnInit { 
  
    items: MenuItem[] | undefined;
    specieItems : MenuItem[] | undefined;
  constructor(private dataAccessService: DataaccessService) { }

  ngOnInit() {

    this.dataAccessService.getSpecies().subscribe(
                                                   (data : MenuItem[]) => 
                                                      { 
                                                        this.specieItems = data;
                                                       
    this.items = [
        {
            label: 'Species',
            items: this.specieItems,
            icon: 'specie-Icon',
        },
        {
            label: 'Bird Search By',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Name',
                    icon: 'category-Icon',
                },
                {
                    label: 'Habitat',
                    icon: 'habitat-Icon'
                },
                {
                    label: 'Food',
                    icon: 'nest-Icon'
                }
            ]               
        },
        {
            label: 'Profile',
            items: [
                {
                    label: 'Settings',
                    icon: 'pi pi-cog'
                },
                {
                    label: 'Logout',
                    icon: 'pi pi-sign-out'
                }
            ]
        }
    ];
    
    }); 

}
}
