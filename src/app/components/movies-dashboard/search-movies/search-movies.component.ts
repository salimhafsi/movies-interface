import { Component } from '@angular/core';
import { Observable, filter, tap } from 'rxjs';
import {
  CriteriaFormModel,
  MovieInformationsModel,
  MoviesDataModel,
} from 'src/app/models/model';
import { MoviesService } from '../../../services/movies-service';
import { isEmpty } from 'lodash';
@Component({
  selector: 'search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss'],
})
export class SearchMoviesComponent {
  moviesData$: Observable<MoviesDataModel>;
  movieInformations$: Observable<MovieInformationsModel>;
  criteria: CriteriaFormModel;
  pageNumber = 1;
  moviesDataLoading = false;
  movieInfoLoading = false;
  showMovieInfoDialog = false;
  constructor(private moviesService: MoviesService) {}
  /*
     Search movies using criteria form.
  */
  searchMovies(criteria: CriteriaFormModel) {
    this.moviesDataLoading = true;
    this.criteria = criteria;
    this.loadMovies();
  }
  /*
     Load movies data using the paginator page changing. 
  */
  loadMoviesByPageNumber(pageNumber) {
    this.moviesDataLoading = true;
    this.pageNumber = pageNumber;
    this.loadMovies();
  }
  loadMovies() {
    this.moviesData$ = this.moviesService
      .getMovies(this.criteria, this.pageNumber)
      .pipe(
        filter((data) => !isEmpty(data)),
        tap(() => (this.moviesDataLoading = false))
      );
  }
  /*
   * Open dialog that contain the movie's informatios.
   * Call a methode on the service that return the informations.
   * Laod the movie's information using an api rest that return the infomartion by id.
   */
  showMovieInformations(id: string) {
    this.showMovieInfoDialog = true;
    this.movieInfoLoading = true;
    this.movieInformations$ = this.moviesService
      .getMovieInformationsById(id)
      .pipe(
        filter((data) => !isEmpty(data)),
        tap(() => (this.movieInfoLoading = false))
      );
  }
}
