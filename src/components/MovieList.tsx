import { Movie } from '../models/Movie';
import MovieItem from './MovieItem';

type Props = {
  movies: Movie[];
  title: string;
};

const MovieList = ({ movies, title }: Props) => {
  return (
    <div className="movie-list">
      {title && <h1 className="movie-list-title">{title}</h1>}
      <div className="movie-list-container">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;

