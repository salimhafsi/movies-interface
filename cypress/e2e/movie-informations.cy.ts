import {
  getMovieInformartionActors,
  getMovieInformartionDialog,
  getMovieInformartionDirector,
  getMovieInformartionGenres,
  getMovieInformartionLanguage,
  getMovieInformartionOrigin,
  getMovieInformartionTitle,
  getMovieInformartionType,
  getMovieInformartionWriters,
  getMovieInformartionYear,
} from 'cypress/po-e2e/movie-information.po';
import {
  getSearchMovieBtn,
  visiteDashboardInterface,
} from 'cypress/po-e2e/movies-dashboard.po';
import {
  getSearchBtn,
  getTableRow,
  getTitleInput,
  getYearInput,
} from 'cypress/po-e2e/search-movies.po';

describe('Movie informations', () => {
  before(() => {
    visiteDashboardInterface();
  });
  /*
   * Test that the movie's informations have been displayed correctly.
   * Test that movie's informations have a correct values
   */
  it('Should display movie informations', () => {
    getSearchMovieBtn().click();
    getTitleInput().type('batman');
    getYearInput().type('2010');
    getSearchBtn().click();
    cy.wait(2000);
    getTableRow(1).click();
    cy.wait(1000);
    getMovieInformartionDialog().should('be.visible');
    getMovieInformartionTitle()
      .should('exist')
      .contains('Superman/Batman: Apocalypse');
    getMovieInformartionType()
      .should('exist')
      .contains('Movie')
      .should('be.visible');
    getMovieInformartionYear()
      .should('exist')
      .contains('2010')
      .should('be.visible');
    getMovieInformartionDirector()
      .should('exist')
      .contains('Lauren Montgomery')
      .should('be.visible');
    getMovieInformartionWriters()
      .should('exist')
      .contains(
        'Bob Kane (character created by: Batman) | Jerry Siegel (character created by: Superman) | Joe Shuster (character created by: Superman) | William Moulton Marston (character created by: Wonder Woman) | Jack Kirby (characters created by: Darkseid & The New Gods) | Jeph Loeb (graphic novel) | Michael Turner (graphic novel) | Tab Murphy'
      )
      .should('be.visible');
    getMovieInformartionActors()
      .should('exist')
      .contains('Andre Braugher | Kevin Conroy | Tim Daly | Susan Eisenberg')
      .should('be.visible');
    getMovieInformartionOrigin().should('be.visible');
    getMovieInformartionLanguage()
      .should('exist')
      .contains('en | fr | eo')
      .should('be.visible');
    getMovieInformartionGenres()
      .should('exist')
      .contains('Animation | Action | Adventure | Sci-Fi')
      .should('be.visible');
  });
});
