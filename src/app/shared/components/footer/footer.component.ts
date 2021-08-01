import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year = new Date()
  Date = new Date(this.year.toLocaleDateString())
  constructor() { }

  ngOnInit(): void {
  }

}
