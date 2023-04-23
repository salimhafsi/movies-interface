export const getTitleInput = () => {
  return cy.get('[data-cy=cy-title-input]');
};
export const getDropdownInput = () => {
  return cy.get('[data-cy=cy-type-dropdown]');
};
export const getYearInput = () => {
  return cy.get('[data-cy=cy-year-input]');
};
export const getSearchBtn = () => {
  return cy.get('[data-cy=cy-serach-btn]');
};
export const getMoviesTable = () => {
  return cy.get('[data-cy=cy-movies-table]');
};
export const getPaginatorTable = () => {
  return cy.get('[data-cy=cy-paginator-table]');
};
export const getPaginatorPages = () => {
  return cy.get('.p-paginator-pages');
};
export const getDropdownItems = () => {
  return cy.get('.p-dropdown-items');
};
export const getMoviesNotFound = () => {
  return cy.get('[data-cy=cy-movie-not-found]');
};
export const getTableRow = (index) => {
  return cy.get('[data-cy=cy-table-row-' + index + ']');
};
