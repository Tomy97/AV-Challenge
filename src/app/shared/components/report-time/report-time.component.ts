import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-time',
  templateUrl: './report-time.component.html',
  styleUrls: ['./report-time.component.scss']
})
export class ReportTimeComponent implements OnInit {
  title: string = 'Reporte del Tiempo'
  constructor() { }

  ngOnInit(): void {
  }

}
