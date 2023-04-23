import {
  getSearchMovieBtn,
  visiteDashboardInterface,
} from 'cypress/po-e2e/movies-dashboard.po';
import {
  getDropdownInput,
  getDropdownItems,
  getMoviesNotFound,
  getMoviesTable,
  getPaginatorPages,
  getPaginatorTable,
  getSearchBtn,
  getTitleInput,
  getYearInput,
} from 'cypress/po-e2e/search-movies.po';

describe('Search movies', () => {
  beforeEach(() => {
    visiteDashboardInterface();
  });
  it('Should navigate to search interface', () => {
    getSearchMovieBtn().click();
    getSearchMovieBtn().should('have.class', 'select-btn');
    getTitleInput().should('be.visible');
    getDropdownInput().should('be.visible');
    getYearInput().should('be.visible');
    getSearchBtn().should('be.visible');
  });
  it('Should not display movies when enter uncorrect movie criteria', () => {
    getSearchMovieBtn().click();
    getTitleInput().type('batman');
    getDropdownInput().click();
    getDropdownItems().contains('Series').click();
    getYearInput().type('2010');
    getSearchBtn().click();
    cy.wait(2000);
    // Test that movies not found.
    getMoviesNotFound().should('be.visible');
    getMoviesNotFound().contains('Movie not found');
  });
  it('Should display movies when enter correct movie criteria', () => {
    getSearchMovieBtn().click();
    getTitleInput().type('batman');
    getYearInput().type('2010');
    getSearchBtn().click();
    cy.wait(2000);
    getMoviesTable().should('be.visible');
    getPaginatorTable().should('exist');
    // Test that the table should contain 10 movies.
    getMoviesTable().find('tr').should('have.length', 10);
    getPaginatorPages().contains(2).click();
    // Test that the table should contain 5 movies.
    getMoviesTable().find('tr').should('have.length', 5);
  });
});
