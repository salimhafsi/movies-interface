import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesDashboardComponent } from './movies-dashboard.component';
import { HomeComponent } from './home/home.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesDashboardComponent,
    children: [{
      path: '',
      component: HomeComponent
    },
    {
      path: 'search',
      component: SearchMoviesComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesDashboardRoutingModule { }
