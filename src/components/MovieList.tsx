import { Movie } from '../models/Movie';
import MovieItem from './MovieItem';

type Props = {
  movies: Movie[];
};

const MovieList = ({ movies }: Props) => {
  return (
    <div className="movie-list">
      <div className="movie-list-container">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;

