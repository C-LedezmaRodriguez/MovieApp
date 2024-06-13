import { Movie } from '../models/Movie';
import MovieList from '../components/MovieList';

type Props = {
  movies: Movie[];
};

const Home = ({ movies }: Props): JSX.Element => {
  return (
    <div className="home">
      <h1>Lista de películas</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;

