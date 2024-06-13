type MediaType = "movie" | "tv";

interface Media {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date?: string;
  first_air_date?: string;
  last_air_date?: string;
  title: string;
  name?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  media_type?: MediaType;
  belongs_to_collection?: BelongsToCollection;
  homepage?: string;
  runtime?: number;
  budget?: number;
  revenue?: number;
  status?: string;
  genres?: Genre[];
  production_companies?: any[];
  networks?: any[];
  episode_run_time?: number[];
  number_of_seasons?: number;
  number_of_episodes?: number;
  created_by: Person[];
  videos?: {
    results: Video[];
  };
  credits?: {
    cast: Person[];
    crew: Person[];
  };
  images?: {
    backdrops: Image[];
    posters: Image[];
  };
  recommendations?: {
    results: Media[];
  };
  external_ids?: ExternalIds;
  character?: string;
}

interface Person {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  profile_path: string;
  popularity: number;
  cast_id?: number;
  media_type?: "person";
  job?: string;
  character?: string;
  credit_id: string;
  order: number;
  also_known_as?: string[];
  birthday?: string;
  place_of_birth?: string;
  homepage?: string;
  biography?: string;
  external_ids?: ExternalIds;
  combined_credits?: {
    cast?: Credit[];
    crew?: Credit[];
  };
  images?: {
    profiles: Image[];
  };
}

interface PageResult<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}
