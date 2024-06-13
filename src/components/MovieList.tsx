import { Movie } from '../models/Movie';
import MovieItem from './MovieItem';

type Props = {
  movies: Movie[];
};

const MovieList = ({ movies }: Props): JSX.Element => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;

