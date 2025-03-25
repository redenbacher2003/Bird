import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { MenuItem, specieItem } from './interface/items';
import { map, Observable } from 'rxjs';
import { species } from './interface/items';

@Injectable({
  providedIn: 'root'
})
export class DataaccessService {

  private apiUrl: string = environment.apiUrl;  
  constructor(private http : HttpClient) { }


  getBirds() {
    return this.http.get(this.apiUrl + 'GetBirds');
  }
  
  getSpecies(): Observable<specieItem[]> {
    return this.http.get<specieItem[]>(`${this.apiUrl}/GetAllSpeciesAsync`) as Observable<specieItem[]>;  
  }

}
