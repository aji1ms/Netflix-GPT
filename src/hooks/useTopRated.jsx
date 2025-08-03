import { useDispatch } from "react-redux";
import { OPTIONS } from "../utils/Constant";
import { addTopRated } from "../utils/MoviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
        const data = await
            fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', OPTIONS);
        const json = await data.json();
        dispatch(addTopRated(json.results));
    }

    useEffect(() => {
        getTopRatedMovies();
    }, [])
}

export default useTopRatedMovies;