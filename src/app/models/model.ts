export interface CriteriaFormModel {
  title?: string;
  type: string;
  releaseYear?: string;
}
export interface MoviesDataModel {
  Search: MovieModel[];
  totalResults: string;
  Response: string;
  Error: string;
}
export interface MovieModel {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
export interface MovieInformationsModel {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: RatingModel[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}
export interface RatingModel {
  Source: string;
  Value: string;
}
