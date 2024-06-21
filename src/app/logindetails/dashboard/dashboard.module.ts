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

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardChildComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class DashboardModule { }

