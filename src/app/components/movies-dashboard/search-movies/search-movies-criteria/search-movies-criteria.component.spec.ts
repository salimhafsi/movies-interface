import { TestBed } from '@angular/core/testing';
import { SearchMoviesCriteriaComponent } from './search-movies-criteria.component';
import { expect } from '@jest/globals';

describe('Search Movies Criteria Component', () => {
  let component: SearchMoviesCriteriaComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchMoviesCriteriaComponent],
    }).compileComponents();
  });
  beforeEach(() => {
    const fixture = TestBed.createComponent(SearchMoviesCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('Should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('Should init form', () => {
    expect(component.searchForm).toBeTruthy();
  });
  it('Should search movie', () => {
    component.searchForm.controls['title'].setValue('batman');
    component.searchForm.controls['releaseYear'].setValue('2012');
    const spySearchMoviesEmitter = jest.spyOn(component.searchMovies, 'emit');
    component.searchMovie();
    expect(spySearchMoviesEmitter).toBeCalledWith(component.searchForm.value);
  });
});
