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

  export interface bird {
  
    birdId : number,
    name : string,
    scientificName : string,
    specieId : number,
    img : string,
    added : Date
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

  export interface specieFilterOption {
    specieName: string;
  }

  export interface birdFilterOption {
    birdName: string;
  }
  
  export interface birdWithFact{
    birdId : number,
    name : string,  
    scientificName : string,
    specieId : number,
    specieName : string,
    img : string,
    added: Date,
    birdFact? : BirdFact
    }

   export interface BirdFact {      
      birdFactId : number,
      birdId : number,
      shortDescription : string,
      sizeInInches : number,
      keyFact : string,
      habitat : string,
      food : string
    }

    export interface BirdAppStats {
      totalBirds : number;   
      totalSpecies : number;
      birdsWithFact : BirdFact[];
    }

    export interface loginRequest {
      userName: string; 
      passWord: string; 
    }
    export interface tokenResponse {
      accessToken: string; 
      expiresIn: number;
      code: string; 
    }    

    export interface UserProfile {
      id: string;
      username: string;
      lastname: string;
      firstname: string;
      email: string;
      status?: string;
      lastlogin?: Date;
      token?: string;
}

