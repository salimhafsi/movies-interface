import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MoviesDashboardRoutingModule } from './movies-dashboard-routing.module';
import { MoviesDashboardComponent } from './movies-dashboard.component';



@NgModule({
  declarations: [
    MoviesDashboardComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    MoviesDashboardRoutingModule,
  ]
})
export class MoviesDashboardModule { }
