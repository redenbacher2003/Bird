import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { MenuItem } from './interface/items';
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

  getSpecies(): Observable<MenuItem[]> {
    return this.http.get<species[]>(`${this.apiUrl}/GetAllSpeciesAsync`).pipe(
      map((items: species[]) => items.map((item: species) => (
            { label: item.description, icon: '' }
      )))) as Observable<MenuItem[]>;  
  }

}
