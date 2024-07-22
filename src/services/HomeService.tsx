import { useEffect, useState } from 'react';
import { Movie } from '../models/Movie.ts';
import MovieUtils  from '../utils/movieUtils.ts';

const useHomeService = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await MovieUtils.fetchMoviesFromApi();
      setMovies(moviesData);
    };
    fetchMovies();
  }, []);

  return { movies };
};

const HomeService = {
  useHomeService,
};

export default HomeService;
