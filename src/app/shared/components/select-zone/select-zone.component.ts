import { PaisesAPI } from './../../services/Interfaces/paises-api-interfaces';
import { CountriesApiService } from './../../services/countries-api.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-select-zone',
  templateUrl: './select-zone.component.html',
  styleUrls: ['./select-zone.component.scss']
})
export class SelectZoneComponent implements OnInit {
  title: string = 'Seleccioná la zona'
  Paises: PaisesAPI [] = []
  constructor(
    private CountriesApiService: CountriesApiService,
  ) {
    this.getCountries()
  }

  ngOnInit(): void {
  }

  getCountries() {
    return this.CountriesApiService.getCountries().subscribe(
      res => {
        this.Paises = res
        console.log(this.Paises);
        
      }
    )
  }
}
