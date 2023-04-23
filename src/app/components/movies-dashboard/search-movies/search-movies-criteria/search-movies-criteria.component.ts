import { Component, EventEmitter, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { CriteriaFormModel } from 'src/app/models/model';

@Component({
  selector: 'app-search-movies-criteria',
  templateUrl: './search-movies-criteria.component.html',
  styleUrls: ['./search-movies-criteria.component.scss'],
})
export class SearchMoviesCriteriaComponent {
  /*
   *Create a form group that contain the search criteria attributes.
   */
  searchForm: UntypedFormGroup = this.formBuilder.group({
    title: [''],
    type: ['Movie'],
    releaseYear: [''],
  });
  Types = ['Movie', 'Series', 'Episode'];
  @Output() searchMovies = new EventEmitter<CriteriaFormModel>();
  constructor(private formBuilder: UntypedFormBuilder) {}
  /*
   * Emit the form values to the parent component.
   * Title value should be not empty.
   */
  searchMovie() {
    this.searchMovies.emit(this.searchForm.value);
  }
}
