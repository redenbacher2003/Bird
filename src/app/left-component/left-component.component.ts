import { CommonModule} from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { MenuItemContent, MenuModule } from 'primeng/menu';
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
                                                       
    this.items = [
        {            
            label: 'Species',
            items: [],            
            icon: 'specie-Icon',
            routerLink: 'species'
        },
        {
            
            label: 'Bird Search By',
            icon: 'pi pi-search',            
            items: [
                {
                    
                    label: 'Name',
                    icon: 'category-Icon',
                    routerLink: 'bird', // This will route to the bird component when clicked
                },
                {                       
                    label: 'Habitat',
                    icon: 'habitat-Icon'
                },
                {                    
                    label: 'Food',
                    icon: 'nest-Icon'
                }
            ],                           
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
  }
}
