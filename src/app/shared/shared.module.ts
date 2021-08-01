import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
// Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LogoComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
