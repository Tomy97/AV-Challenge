import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-time',
  templateUrl: './report-time.component.html',
  styleUrls: ['./report-time.component.scss']
})
export class ReportTimeComponent implements OnInit {
  title: string = 'Reporte del Tiempo'
  pais: string = 'Argentina'
  ciudad: string = 'Ciudad Autonoma de Buenos Aires'
  day: string = 'Viernes'
  stay: string = 'Soleado'
  tempertureC: number = 22
  tempertureF: number = 71.6
  constructor() {
    console.log(this.tempertureF);
  }
  ngOnInit(): void {
  }
  
}
