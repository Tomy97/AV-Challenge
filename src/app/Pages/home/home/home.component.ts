import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Titulo: string = 'Servicio Del Clima';
  constructor() { }

  ngOnInit(): void {
  }

}
