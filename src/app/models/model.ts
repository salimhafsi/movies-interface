export interface CriteriaFormModel {
  title?: string;
  type: string;
  releaseYear?: string;
}
export interface CriteriaSearchApiModel {
  s?: string;
  page?: number;
  type?: string;
  y: string;
}
export interface moviesDataModel {
  Search: movieModel[];
  totalResults: string;
  Response: string;
  Error: string;
}
export interface movieModel {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
