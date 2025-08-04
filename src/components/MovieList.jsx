import React from 'react'
import MovieCards from './MovieCards';

const MovieList = ({ title, movies }) => {
    return (
        <div className='px-4'>
            <h1 className='text-2xl md:text-3xl font-semibold py-5 text-white'>{title}</h1>
            <div className='flex overflow-x-scroll scrollbar-hide'>
                <div className='flex'>
                    {movies.map(movie => (
                        <MovieCards key={movie.id} posterPath={movie.poster_path} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieList;
