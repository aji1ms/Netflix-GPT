import { useDispatch, useSelector } from "react-redux";
import { OPTIONS } from "../utils/Constant";
import { addNowPlayingMovies } from "../utils/MoviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);

    const getNowPlayingMovies = async () => {
        const data = await
            fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(() => {
        !nowPlayingMovies && getNowPlayingMovies();
    }, [])
}

export default useNowPlayingMovies;