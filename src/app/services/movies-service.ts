import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { CriteriaFormModel, moviesDataModel } from '../models/model';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private API_URL = environment.API_URL;
  constructor(protected httpClient: HttpClient) {}
  /*
    Methode to get movies list using criteria form and paginator page number.
    Passing criteria as http params.
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
    return this.httpClient.get<moviesDataModel>(`${this.API_URL}`, { params });
  }
}
