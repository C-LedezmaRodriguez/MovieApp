import { Movie } from '../models/Movie';

type MovieItemProps = {
  movie: Movie;
};

const MovieItem = ({ movie }: MovieItemProps) => {
  return (
    <div className="movie-item-container">
      <img src={movie.poster_path} alt={`${movie.title} Poster`} className="movie-item-poster" />
      <div className="movie-item-details">
        <h2 className="movie-item-title">{movie.title}</h2>
        <p className="movie-item-language">{movie.original_language}</p>
      </div>
    </div>
  );
};

export default MovieItem;
