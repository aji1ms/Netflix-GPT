import { useDispatch } from "react-redux";
import { OPTIONS } from "../utils/Constant";
import { addTrailerVideo } from "../utils/MoviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const movieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', OPTIONS);
        const json = await data.json();

        const filterData = json.results.filter((video) => video.type === "Trailer")
        const trailer = filterData.length ? filterData[0] : json.results[0];

        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        movieVideos();
    }, [])
}

export default useMovieTrailer;