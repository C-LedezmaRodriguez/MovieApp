import { Movie } from '../models/Movie';
import {Link} from 'react-router-dom';

type MovieItemProps = {
  movie: Movie;
};

const MovieItem = ({ movie }: MovieItemProps) => {
// const navigate = useNavigate();
  return (
    // <div className="movie-item-container" onClick={() => {navigate(`/MovieApp/movies/${movie.id}`)}}>
    <div>  
      <img src={movie.poster_path} alt={`${movie.title} Poster`} className="movie-item-poster" />
      <div className="movie-item-details">
        <h2 className="movie-item-title">{movie.title}</h2>
        <p className="movie-item-language">Sub|Dob - {movie.original_language}</p>
        <Link to = {`/MovieApp/movies/${movie.id}`}>Go to movie details </Link>
      </div>
    </div>
  );
};

export default MovieItem;
