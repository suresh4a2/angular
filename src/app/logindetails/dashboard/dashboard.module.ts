// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { DashboardRoutingModule } from './dashboard-routing.module';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';
// import { DashboardChildComponent } from './dashboard-child/dashboard-child.component';


// @NgModule({
//   declarations: [
//     DashboardComponent,
//     HeaderComponent,
//     FooterComponent,
//     DashboardChildComponent
//   ],
//   imports: [
//     CommonModule,
//     DashboardRoutingModule
//   ]
// })
// export class DashboardModule { }



import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardChildComponent } from './dashboard-child/dashboard-child.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


import { CountryComponent } from './country/country.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';

import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardChildComponent,
    HeaderComponent,
    FooterComponent,
    CountryComponent,
    MatInputModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatTableModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule, MatOptionModule

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class DashboardModule { }

