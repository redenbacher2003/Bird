import { CommonModule} from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { MenuItemContent, MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { MenuItem } from '../interface/items';
import { DataaccessService } from '../dataaccess.service';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { ProfileService } from '../profile.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-left-component',
  imports: [ 
             MenuModule, 
             ToastModule,
             CommonModule,
             PanelMenuModule,
             ConfirmDialog,
             ButtonModule
            ],
  providers: [ConfirmationService],
  templateUrl: './left-component.component.html',
  styleUrl: './left-component.component.scss'
})
export class LeftComponentComponent implements OnInit { 
  
    items: MenuItem[] | undefined;
    specieItems : MenuItem[] | undefined;
  constructor(
               private dataAccessService: DataaccessService,
               private confirmationService: ConfirmationService,
               private router: Router,
               private profileService : ProfileService
              
  ) { }

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
                    icon: 'logout-Icon',
                    command: () => {this.confirm()}
                }
            ]
        }
    ];
  }

  confirm() {
        this.confirmationService.confirm({
            header: 'Confirmation',
            message: 'Are you sure you wish to logout?',
            icon: 'pi pi-exclamation-circle',
            rejectButtonProps: {
                label: 'Cancel',
                icon: 'pi pi-times',
                variant: 'outlined',
                size: 'small'
            },
            acceptButtonProps: {
                label: 'Logout',
                icon: 'pi pi-check',
                size: 'small'
            },
            accept: () => {
                this.logout()
            }
        });
    }

    logout() {
    this.profileService.logout();
    this.router.navigate(['/login']);
  }
}
