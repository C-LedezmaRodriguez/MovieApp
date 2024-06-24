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
        <p className="movie-item-language">Sub|Dob - {movie.original_language}</p>
        {/* <p>{movie.overview}</p> */}
      </div>
    </div>
  );
};

export default MovieItem;
