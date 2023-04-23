import {
  getAboutBtn,
  getHeaderLogo,
  getHomeImage,
  getHomeText,
  getSearchMovieBtn,
  getDashboardHeader,
  visiteDashboardInterface,
} from 'cypress/po-e2e/movies-dashboard.po';

describe('Movies dashborad', () => {
  before(() => {
    visiteDashboardInterface();
  });
  /*
   * Test that all dashbord's elements have been displayed correctly.
   * Test that the home page text has been displayed correctly.
   */
  it('Should display the dashboard elements', () => {
    getDashboardHeader().should('be.visible');
    getHeaderLogo().should('be.visible');
    getSearchMovieBtn().should('be.visible');
    getAboutBtn().should('be.visible');
    getHomeImage().should('be.visible');
    getHomeText()
      .should('exist')
      .contains('FIND THE INFO OF YOUR FAVORITE MOVIE')
      .should('be.visible');
  });
});
