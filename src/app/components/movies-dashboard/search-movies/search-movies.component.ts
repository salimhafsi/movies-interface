import { Component } from '@angular/core';
import { Observable, filter, tap } from 'rxjs';
import { CriteriaFormModel, moviesDataModel } from 'src/app/models/model';
import { MoviesService } from 'src/app/services/movies-service';
import { isEmpty } from 'lodash';
@Component({
  selector: 'search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss'],
})
export class SearchMoviesComponent {
  moviesData$: Observable<moviesDataModel>;
  criteria: CriteriaFormModel;
  pageNumber = 1;
  loading = false;
  constructor(private moviesService: MoviesService) {}
  /*
     Search movies using criteria form.
  */
  searchMovies(criteria: CriteriaFormModel) {
    this.criteria = criteria;
    this.loading = true;
    this.loadMovies();
  }
  /*
     Load movies data using the paginator page changing. 
  */
  loadMoviesByPageNumber(pageNumber) {
    this.loading = true;
    this.pageNumber = pageNumber;
    this.loadMovies();
  }
  loadMovies() {
    this.moviesData$ = this.moviesService
      .getMovies(this.criteria, this.pageNumber)
      .pipe(
        filter((data) => !isEmpty(data)),
        tap(() => (this.loading = false))
      );
  }
}
