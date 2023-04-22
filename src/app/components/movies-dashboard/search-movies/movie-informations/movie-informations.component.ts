import { Component, Input } from '@angular/core';
import { MovieInformationsModel } from 'src/app/models/model';

@Component({
  selector: 'movie-informations',
  templateUrl: './movie-informations.component.html',
  styleUrls: ['./movie-informations.component.scss'],
})
export class MovieInformationsComponent {
  @Input() movieInfoLoading: boolean;
  @Input() movieInformations: MovieInformationsModel;
}
