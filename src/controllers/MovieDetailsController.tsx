import { useLoaderData } from 'react-router-dom';
import MovieDetail from '../pages/MovieDetails.tsx';
import { Movie } from '../models/Movie.ts';

const MovieDetailController = () => {
  const { movie } = useLoaderData() as { movie: Movie };

  return <MovieDetail movie = {movie} />;
};

export default MovieDetailController;
