import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MoviesService } from 'src/app/services/movies-service';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { HomeComponent } from './home/home.component';
import { MoviesDashboardRoutingModule } from './movies-dashboard-routing.module';
import { MoviesDashboardComponent } from './movies-dashboard.component';
import { DisplayMoviesComponent } from './search-movies/display-movies/display-movies.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';
import { SearchMoviesCriteriaComponent } from './search-movies/search-movies-criteria/search-movies-criteria.component';

@NgModule({
  declarations: [
    MoviesDashboardComponent,
    HomeComponent,
    SearchMoviesComponent,
    SearchMoviesCriteriaComponent,
    DisplayMoviesComponent,
  ],
  imports: [
    CommonModule,
    MoviesDashboardRoutingModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
    HttpClientModule,
    TableModule,
    PaginatorModule,
  ],
  providers: [MoviesService],
})
export class MoviesDashboardModule {}
