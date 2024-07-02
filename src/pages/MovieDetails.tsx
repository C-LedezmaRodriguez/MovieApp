import { Movie } from '../models/Movie.ts';

type Props ={
  movie: Movie
}

const MovieDetail = ({movie}: Props) => {

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.poster_path} alt={movie.title} />
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date.toDateString()}</p>
      <p>Vote Average: {movie.vote_average}</p>
    </div>
  );
};

export default MovieDetail;
