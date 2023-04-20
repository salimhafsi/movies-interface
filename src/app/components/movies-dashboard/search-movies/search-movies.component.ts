import { Component } from '@angular/core';
import { CriteriaFormModel } from 'src/app/models/model';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss']
})
export class SearchMoviesComponent {
  constructor() { }
  searchMovies(criteria: CriteriaFormModel) {
    console.log(criteria)
  }
}
