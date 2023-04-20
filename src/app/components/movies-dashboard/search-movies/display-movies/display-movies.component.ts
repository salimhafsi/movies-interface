import { Component, EventEmitter, Input, Output } from '@angular/core';
import { moviesDataModel } from 'src/app/models/model';
import { isEmpty } from 'lodash';
@Component({
  selector: 'display-movies',
  templateUrl: './display-movies.component.html',
  styleUrls: ['./display-movies.component.scss'],
})
export class DisplayMoviesComponent {
  moviesInfo: moviesDataModel;
  totalResults: number;
  /*
     Movies data an input parametre that has the movies informations.
     Get the data and the total result from the movies data input to pass its to the view. 
  */
  @Input() set moviesData(data: moviesDataModel) {
    if (!isEmpty(data)) {
      this.moviesInfo = data;
      this.totalResults = Number(data.totalResults);
    }
  }
  @Output() loadMoviesByPageNumber = new EventEmitter<Number>();
  /*
    Fired when paginator page changing.
    Load movies data using page number.
  */
  onPageChange(event) {
    this.loadMoviesByPageNumber.emit(event.page + 1);
  }
}
