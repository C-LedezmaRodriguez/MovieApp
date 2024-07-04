import MovieUtils from "../utils/movieUtils";

const loaderMovie = async (id:string) => {
        const movieId = id;
        const movie = await MovieUtils.fetchMoviesById(movieId as string);
        return { movie };
}
export default loaderMovie;