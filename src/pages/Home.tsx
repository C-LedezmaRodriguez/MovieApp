import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <h1>Welcome to MovieApp!</h1>
      <div className ='goMovies' onClick={() => { navigate(`/MovieApp/movies`) }}>
        Click here to go to movies
      </div>
    </div>
  );
};

export default Home;
