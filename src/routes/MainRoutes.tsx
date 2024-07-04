import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from '../pages/Home';
import loaderMovie from '../loader/loaderMovie';
import routes from '../constants/routes';
import MovieController from '../controllers/MovieController';
import MovieDetailController from '../controllers/MovieDetailsController';


const MainRoutes = () => {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
};

const router = createBrowserRouter(
    [
        {
            path: routes.home,
            element: <Home/>

        },
        {
            path: routes.movies,
            element: <MovieController/>
            // element: <MovieList movies={movies} title="Movies"/>
        },
        {
            path: `${routes.movies}/:id`,
            element: <MovieDetailController/>,
            loader: ({params}) => loaderMovie(params.id as string)
        }

    ]
)


export default MainRoutes;
 