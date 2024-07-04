// import mockData from '../data/mockDataMovie.json';
import { Movie } from '../models/Movie.ts';
import API_KEY from '../constants/keys.ts';

const API_URL = 'https://api.themoviedb.org/3/movie/';
const posterPath = 'https://image.tmdb.org/t/p/w500'
// const convertMovieMockDataToMovie = (): Movie[] => {
//   return mockData.map((movie) => {
//     return {
//       adult: movie.adult,
//       backdrop_path: movie.backdrop_path,
//       genre_ids: movie.genre_ids,
//       id: movie.id,
//       original_language: movie.original_language,
//       original_title: movie.original_title,
//       overview: movie.overview,
//       popularity: movie.popularity,
//       poster_path: movie.poster_path,
//       release_date: new Date(movie.release_date),
//       title: movie.title,
//       video: movie.video,
//       vote_average: movie.vote_average,
//       vote_count: movie.vote_count,
//     };
//   });
// };


const mapMovieData= (movie:Movie): Movie =>{
  return {
      adult: movie.adult,
      backdrop_path: movie.backdrop_path,
      genre_ids: movie.genre_ids,
      id: movie.id,
      original_title: movie.original_title,
      original_language: movie.original_language,
      overview: movie.overview,
      popularity: movie.popularity,
      poster_path: `${posterPath}${movie.poster_path}`,
      release_date: new Date(movie.release_date),
      title: movie.title,
      video: movie.video,
      vote_average: movie.vote_average,
      vote_count: movie.vote_count,
  };
};

const fetchMoviesFromApi = async (): Promise<Movie[]> => {
    try {
      const response = await fetch(`${API_URL}popular?api_key=${API_KEY}`);
      const data = await response.json();
      return data.results.map(mapMovieData);
    }catch(error){
      console.error('Error fetching movies from API:', error);
      return [];
    }

}

const fetchMoviesById = async (id:string) : Promise<Movie> =>{
  try{
    const response = await fetch(`${API_URL}${id}?api_key=${API_KEY}`);
      const movie = await response.json();
      return mapMovieData(movie);
    } catch (error) {
      console.error(`Error fetching movie with id ${id} from API:`, error);
      return {} as Movie; 
    }
  }

const MovieUtils = {
  // convertMovieMockDataToMovie,
  fetchMoviesFromApi,
  fetchMoviesById
};

export default MovieUtils;

