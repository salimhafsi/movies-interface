import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CriteriaFormModel, moviesDataModel } from 'src/app/models/model';
import { MoviesService } from 'src/app/services/movies-service';

@Component({
  selector: 'search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss'],
})
export class SearchMoviesComponent {
  moviesData$: Observable<moviesDataModel>;
  criteria: CriteriaFormModel;
  constructor(private moviesService: MoviesService) {}
  /*
     Search movies using criteria form.
  */
  searchMovies(criteria: CriteriaFormModel) {
    this.moviesData$ = this.moviesService.getMovies(criteria);
    this.criteria = criteria;
  }
  /*
     Load movies data using the paginator page changing. 
  */
  loadMoviesByPageNumber(pageNumber) {
    this.moviesData$ = this.moviesService.getMovies(this.criteria, pageNumber);
  }
}
