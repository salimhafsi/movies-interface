import { TestBed } from '@angular/core/testing';
import { SearchMoviesComponent } from './search-movies.component';
import { expect } from '@jest/globals';
import { MoviesService } from '../../../services/movies-service';
import { of } from 'rxjs';

describe('Search movies Component', () => {
  let component: SearchMoviesComponent;
  let service: MoviesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchMoviesComponent],
      providers: [
        {
          provide: MoviesService,
          useValue: {
            getMovies: jest.fn(),
            getMovieInformationsById: jest.fn(),
          },
        },
      ],
    }).compileComponents();
  });
  beforeEach(() => {
    service = TestBed.inject(MoviesService);
    jest.spyOn(service, 'getMovies').mockReturnValue(of({} as any));
    const fixture = TestBed.createComponent(SearchMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create component', () => {
    expect(component).toBeTruthy();
  });
  it('should search movies', () => {
    const mockCriteria = {
      title: 'batman',
      type: 'movie',
      releaseYear: '2010',
    };
    jest.spyOn(service, 'getMovies').mockReturnValue(of({} as any));
    const spyLoadMovies = jest.spyOn(component, 'loadMovies');
    component.searchMovies(mockCriteria);
    expect(component.moviesDataLoading).toBeTruthy();
    expect(component.criteria).toEqual(mockCriteria);
    expect(spyLoadMovies).toBeCalled();
  });

  it('should load movies by page number', () => {
    const spyLoadMovies = jest.spyOn(component, 'loadMovies');
    component.loadMoviesByPageNumber(2);
    expect(component.moviesDataLoading).toBeTruthy();
    expect(component.pageNumber).toEqual(2);
    expect(spyLoadMovies).toBeCalled();
  });
  it('should load movies', () => {
    const spyGetMovies = jest.spyOn(service, 'getMovies');
    component.loadMovies();
    expect(spyGetMovies).toBeCalled();
  });
  it('should show movie informations', () => {
    const spyGetMovieInformationsById = jest.spyOn(
      service,
      'getMovieInformationsById'
    );
    jest
      .spyOn(service, 'getMovieInformationsById')
      .mockReturnValue(of({} as any));
    component.showMovieInformations('125');
    expect(component.showMovieInfoDialog).toBeTruthy();
    expect(component.movieInfoLoading).toBeTruthy();
    expect(spyGetMovieInformationsById).toBeCalled();
  });
});
