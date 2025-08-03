import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    let movies = useSelector((store) => store.movies);
    const {
        nowPlayingMovies,
        popularMovies,
        topRated,
        upComing } = useSelector((store) => store.movies);

    const allLoaded = nowPlayingMovies && popularMovies && topRated && upComing;
    if (!allLoaded) return null;

    return (
        <div className='bg-black '>
            <div className='-mt-48 relative z-30'>
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Popular"} movies={movies.popularMovies} />
                <MovieList title={"Top Rated"} movies={movies.topRated} />
                <MovieList title={"Upcoming"} movies={movies.upComing} />
            </div>
        </div>
    )
}

export default SecondaryContainer;
