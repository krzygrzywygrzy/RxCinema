import Country from "./Country";
import Genre from "./Genre";
import ProductionCompany from "./ProductionCompany";
import SpokenLanguage from "./SpokenLanguage";
import FilmStatus from "./Status";

interface Film {
  poster_path?: string;
  id: number;
  title: string;
  vote_average: number;
}

export interface FilmDetails {
  adult: boolean;
  backdrop_path?: string;
  belongs_to_collection?: any;
  budget: number;
  genres: Genre[];
  homepage?: string;
  id: number;
  imdb_id?: string;
  original_language: string;
  original_title: string;
  overview?: string;
  popularity: number;
  poster_path?: string;
  production_companies: ProductionCompany[];
  production_countries: Country[];
  release_date: string;
  revenue: string;
  runtime?: number;
  spoken_languages: SpokenLanguage[];
  status: FilmStatus;
  tagline?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export default Film;
