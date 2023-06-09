import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import {
  CriteriaFormModel,
  MovieInformationsModel,
  MoviesDataModel,
} from '../models/model';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private API_URL = environment.API_URL;
  constructor(protected httpClient: HttpClient) {}
  /*
   * Get movies list using criteria form and paginator page number.
   * Passing criteria as http params.
   */
  getMovies(criteria: CriteriaFormModel, pageNumber?: number) {
    let params = new HttpParams();
    params = params.append('s', `${criteria.title}`);
    if (criteria.type) {
      params = params.append('type', `${criteria.type}`);
    }
    if (criteria.releaseYear) {
      params = params.append('y', `${criteria.releaseYear}`);
    }
    if (pageNumber) {
      params = params.append('page', `${pageNumber}`);
    }
    return this.httpClient.get<MoviesDataModel>(`${this.API_URL}`, { params });
  }
  /*
   * Get movie's information by id.
   * Passing movie's is as a http params.
   */
  getMovieInformationsById(id: string) {
    let params = new HttpParams();
    params = params.append('i', `${id}`);
    return this.httpClient.get<MovieInformationsModel>(`${this.API_URL}`, {
      params,
    });
  }
}
