import { TestBed, getTestBed } from '@angular/core/testing';
import { MoviesService } from './movies-service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { expect } from '@jest/globals';

describe('Movies service', () => {
  let service: MoviesService;
  let httpMock: HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [MoviesService],
      imports: [HttpClientTestingModule],
    });
    service = getTestBed().get(MoviesService);
    httpMock = getTestBed().get(HttpTestingController);
  });
  it('Should create the service', () => {
    expect(service).toBeTruthy();
  });
  it('Should get movies', () => {
    const mockCriteria = {
      title: 'batman',
      type: 'movie',
      releaseYear: '2010',
    };
    service.getMovies(mockCriteria, 1).subscribe((movies) => {
      expect(movies).toBeTruthy();
    });
  });
  it('Should get movie informations by id', () => {
    service.getMovieInformationsById('123').subscribe((movie) => {
      expect(movie).toBeTruthy();
    });
  });
});
