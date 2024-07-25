export type Movies = {
  big_image: string;
  description: string;
  genere: string[];
  id: string;
  image: string;
  imdb_link: string;
  rank: number;
  rating: string;
  thumbnail: string;
  title: string;
  year: number;
};

export type movie = {
  rank: number;
  title: string;
  thumbnail: string;
  rating: string;
  id: string;
  year: number;
  image: string;
  big_image: string;
  description: string;
  trailer: string;
  trailer_embed_link: string;
  trailer_youtube_id: string;
  genre: string[];
  director: string[];
  writers: string[];
  imdbid: string;
  imdb_link: string;
};

export type Shows= {
  rank: number;
  title: string;
  description: string;
  image: string;
  big_image: string;
  genre: string[]; 
  thumbnail: string;
  rating: number;
  id: string;
  year: string; 
  imdbid: string;
  imdb_link: string;
}

export type show = {
  rank: number;
  title: string;
  description: string;
  thumbnail: string;
  rating: number;
  id: string;
  year: string;
  image: string; 
  big_image: string; 
  trailer?: string; 
  trailer_embed_link?: string;
  trailer_youtube_id?: string; 
  genre: string[]; 
  imdbid: string;
  imdb_link: string;
}