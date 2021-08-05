import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NavbarComponent } from './components/navbar/navbar.component'
import { FooterComponent } from './components/footer/footer.component'
// Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
// Material
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SelectZoneComponent } from './components/select-zone/select-zone.component'
import { ReportTimeComponent } from './components/report-time/report-time.component'

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SelectZoneComponent,
    ReportTimeComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    FormsModule,
    ReactiveFormsModule,
    SelectZoneComponent,
    ReportTimeComponent,
  ],
})
export class SharedModule {}
