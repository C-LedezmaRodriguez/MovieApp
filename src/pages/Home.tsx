import MovieList from '../components/MovieList';
// import HomeService from '../services/HomeService';
import { Movie } from '../models/Movie';

type Props = {
  movies: Movie[];
  title: string;
  subtitle: string
};
const Home = ({ movies }: Props) => {
  // const { movies } = HomeService.useHomeService();
  const mReverse = [...movies]
  mReverse.shift()
  return (
    <div className="home">
      <MovieList movies={movies} title = "Peliculas nuevas" subtitle='Desubre las mejores peliculas aqui!'/>
      <MovieList movies={mReverse}></MovieList>
    </div>
  );
};

export default Home;

