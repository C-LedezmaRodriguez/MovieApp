import { Movie } from '../models/Movie';
import MovieItem from './MovieItem';

type Props = {
  movies: Movie[];
  title: string;
  subtitle: string; 
};

const MovieList = ({ movies, title, subtitle }: Props) => {
  return (
    <div className="movie-list">
      {title && <h1 className="movie-list-title">{title}</h1>}
      {subtitle && <h3 className="movie-list-subtitle">{subtitle}</h3>}
      <div className="movie-list-container">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;

