import MovieList from '../components/MovieList';
import HomeService from '../services/HomeService';

const Home = () => {
  const { movies } = HomeService.useHomeService();
  return (
    <div className="home">
      <h1>Lista de películas</h1>
      <MovieList movies={movies}/>
    </div>
  );
};

export default Home;

