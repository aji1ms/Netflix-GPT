import React, { useEffect, useState } from 'react'
import VideoBackground from './VideoBackground'
import { useParams } from 'react-router-dom'
import { OPTIONS } from '../utils/Constant';
import MovieList from './MovieList';
import SecondaryContainer from "./SecondaryContainer"

const MovieVideos = () => {
    const { id } = useParams();
    const [video, setVideo] = useState(null);

    useEffect(() => {
        const fetchMovieVideo = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, OPTIONS);

                const data = await response.json();

                const trailer = data.results.find(
                    (video) => video.type === "Trailer" && video.site === "YouTube"
                )
                setVideo(trailer ? trailer.key : data.results[0]?.key);

            } catch (error) {
                console.lof("error fetching movie", error);
            }
        }
        fetchMovieVideo();
    }, [id])

    return (
        <div className="w-screen h-screen">
            {video ? (
                <iframe
                    className="w-screen aspect-video h-full"
                    src={`https://www.youtube.com/embed/${video}?autoplay=1&mute=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
            ) : (
                <div className='w-screen h-screen aspect-video bg-black flex items-center justify-center'>
                    <div className='w-16 h-16 border-4 border-gray-600 border-t-white rounded-full animate-spin' />
                </div>
            )}
            <div className="block md:hidden">
                <SecondaryContainer />
            </div>
        </div>
    )
}

export default MovieVideos;
