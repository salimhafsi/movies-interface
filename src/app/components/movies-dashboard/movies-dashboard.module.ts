import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MoviesDashboardRoutingModule } from './movies-dashboard-routing.module';
import { MoviesDashboardComponent } from './movies-dashboard.component';
import { ButtonModule } from 'primeng/button';
import { SearchMoviesComponent } from './search-movies/search-movies.component';
import { SearchMoviesCriteriaComponent } from './search-movies/search-movies-criteria/search-movies-criteria.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    MoviesDashboardComponent,
    HomeComponent,
    SearchMoviesComponent,
    SearchMoviesCriteriaComponent,
  ],
  imports: [
    CommonModule,
    MoviesDashboardRoutingModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule
  ]
})
export class MoviesDashboardModule { }
