import { Movie } from '../models/Movie';
import MovieList from '../components/MovieList';

type Props = {
  movies: Movie[];
};

const Home = ({ movies }: Props) => {
  return (
    <div className="home">
      {/* <h1>Lista de películas</h1> */}
      <MovieList movies={movies} title = "lista de peliculas"/>
    </div>
  );
};

export default Home;

