import { useDispatch } from "react-redux";
import { OPTIONS } from "../utils/Constant";
import { addUpcoming } from "../utils/MoviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
        const data = await
            fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', OPTIONS);
        const json = await data.json();
        dispatch(addUpcoming(json.results));
    }

    useEffect(() => {
        getUpcomingMovies();
    }, [])
}

export default useUpcomingMovies;