export interface MenuItem {
    label: string;
    icon?: string;
    items?: MenuItem[];
    routerLink?: string;    
  }

  export interface species {
    specieId : number;
    description : string; 
    active? : boolean
  }

  export interface specieItem {
    specieId : number;
    description : string;
    active : boolean;
    shortDescription : string;
    thumbnail : string;
  }

  export interface specieShowOption {
    name: string;
    code: string;
  }
  