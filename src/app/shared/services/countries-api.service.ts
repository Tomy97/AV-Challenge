import { PaisesAPI } from './Interfaces/paises-api-interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesApiService {
  private Url: string = 'https://restcountries.eu/rest/v2'
  @Output() Paises: Array<PaisesAPI> = []
  constructor( private http: HttpClient ) { }


  getCountries() {
    return this.http.get<PaisesAPI[]>(`${this.Url}/regionalbloc/usan`)
  }
}
