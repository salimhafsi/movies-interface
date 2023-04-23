export const getDashboardHeader = () => {
  return cy.get('[data-cy=cy-header]');
};
export const getHeaderLogo = () => {
  return cy.get('[data-cy=cy-header-logo]');
};
export const getSearchMovieBtn = () => {
  return cy.get('[data-cy=cy-search-movie-btn');
};
export const getAboutBtn = () => {
  return cy.get('[data-cy=cy-about-btn');
};
export const getHomeImage = () => {
  return cy.get('[data-cy=cy-home-img');
};
export const getHomeText = () => {
  return cy.get('[data-cy=cy-home-text');
};
export const visiteDashboardInterface = () => {
  return cy.visit('/');
};
