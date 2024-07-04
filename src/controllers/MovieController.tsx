import HomeService from '../services/HomeService.tsx';
import Movies from '../pages/Movies.tsx';

const MovieController = () => {
  const { movies } = HomeService.useHomeService();

  return <Movies movies={movies} />;
};

export default MovieController;
