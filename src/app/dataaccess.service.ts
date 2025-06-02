import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BirdAppStats, birdWithFact, MenuItem, specieItem, tokenResponse } from './interface/items';
import { map, Observable } from 'rxjs';
import { species } from './interface/items';
import { bird } from './interface/items';
import { loginRequest } from './interface/items';

@Injectable({
  providedIn: 'root'
})
export class DataaccessService {

  private apiUrl: string = environment.apiUrl;  
  private authUrl: string = environment.authUrl;  
  constructor(private http : HttpClient) { }


  getBirds() {
    return this.http.get(this.apiUrl + 'GetBirds');
  }
  
  getSpecies(): Observable<specieItem[]> {
    return this.http.get<specieItem[]>(`${this.apiUrl}/GetAllSpeciesAsync`) as Observable<specieItem[]>;  
  }

  getBySpecieId(specieId: number): Observable<bird[]> {
    return this.http.get<bird[]>(`${this.apiUrl}/GetBySpecieId/${specieId}`);
  }
 
  getBirdWithFactById(birdId: number): Observable<birdWithFact> {
    return this.http.get<birdWithFact>(`${this.apiUrl}/GetBirdWithFactById/${birdId}`);
  }

  getBirdAppStats(): Observable<BirdAppStats> {
    return this.http.get<BirdAppStats>(`${this.apiUrl}/GetStats`) as Observable<BirdAppStats>;
  }
 
  getBirdsBy(filterBy: string, filterValue: string): Observable<birdWithFact[]> {
    return this.http.get<birdWithFact[]>(`${this.apiUrl}/GetBirdsBy?filterBy=${filterBy}&filterValue=${filterValue}&pageNumber=1&pageSize=100`) as Observable<birdWithFact[]>;
  }

  logIn(logIn : loginRequest): Observable<tokenResponse> {
    return this.http.get(`${this.authUrl}?userName=${logIn.userName}&passWord=${logIn.passWord}`) as Observable<tokenResponse>;
  }
  

}
