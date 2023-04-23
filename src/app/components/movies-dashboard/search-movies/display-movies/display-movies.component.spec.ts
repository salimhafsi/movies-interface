import { TestBed } from '@angular/core/testing';
import { DisplayMoviesComponent } from './display-movies.component';
import { expect } from '@jest/globals';

describe('Display Movies Component', () => {
  let component: DisplayMoviesComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayMoviesComponent],
    }).compileComponents();
  });
  beforeEach(() => {
    const fixture = TestBed.createComponent(DisplayMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('Should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('Should set movies data', () => {
    const mockData = {
      Search: [],
      totalResults: '15',
      Response: 'true',
      Error: '',
    };
    component.moviesData = mockData;
    expect(component.moviesInfo).toEqual(mockData);
    expect(component.totalResults).toEqual(15);
  });
  it('Should on page change', () => {
    const mockEvent = {
      page: 2,
    };
    const spyLoadMoviesByPageNumber = jest.spyOn(
      component.loadMoviesByPageNumber,
      'emit'
    );
    component.onPageChange(mockEvent);
    expect(spyLoadMoviesByPageNumber).toBeCalledWith(3);
  });
  it('Should on show movie informations', () => {
    const spyShowMovieInformations = jest.spyOn(
      component.showMovieInformations,
      'emit'
    );
    component.onShowMovieInformations('123');
    expect(spyShowMovieInformations).toBeCalledWith('123');
  });
});
