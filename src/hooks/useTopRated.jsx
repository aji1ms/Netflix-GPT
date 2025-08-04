import { useDispatch, useSelector } from "react-redux";
import { OPTIONS } from "../utils/Constant";
import { addTopRated } from "../utils/MoviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const topRated = useSelector(store => store.movies.topRated);

    const getTopRatedMovies = async () => {
        const data = await
            fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', OPTIONS);
        const json = await data.json();
        dispatch(addTopRated(json.results));
    }

    useEffect(() => {
        !topRated && getTopRatedMovies();
    }, [])
}

export default useTopRatedMovies;