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
            label: 'Home',
            items: [],            
            icon: 'home-Icon',
            routerLink: 'dashboard'
        },
        {            
            label: 'Species',
            items: [],            
            icon: 'specie-Icon',
            routerLink: 'species'
        },
        {
            
            label: 'Bird Search By',
            icon: 'binoculars-Icon',            
            items: [
                {
                    
                    label: 'Name',
                    icon: 'category-Icon',
                    routerLink: 'bird-search'
                },
                {                       
                    label: 'Habitat',
                    icon: 'habitat-Icon',
                    routerLink: ''

                },
                {                    
                    label: 'Food',
                    icon: 'nest-Icon'
                }
            ],                           
        },
        {
            
            label: 'Profile',            
            icon: 'profile-Icon',
            items: [
                {
                    label: 'View Profile',
                    icon: 'view-profile-Icon',
                    routerLink: 'profile'
                },
                {   
                    label: 'Settings',
                    icon: 'settings-Icon'
                },
                {                    
                    label: 'Logout',
                    icon: 'logout-Icon'
                    
                }
            ]
        }
    ];
  }
}
