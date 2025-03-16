export interface MenuItem {
    label: string;
    icon?: string;
    items?: MenuItem[];
  }

  export interface species {
    specieId : number;
    description : string; 
    active? : boolean
  }