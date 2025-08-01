import { useDispatch } from "react-redux";
import { OPTIONS } from "../utils/Constant";
import { addNowPlayingMovies } from "../utils/MoviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await
            fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(() => {
        getNowPlayingMovies();
    }, [])
}

export default useNowPlayingMovies;