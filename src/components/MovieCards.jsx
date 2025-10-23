import React from 'react';
import { POSTER_URL_PATH } from '../utils/Constant';
import { useNavigate } from 'react-router-dom';

const MovieCards = ({ posterPath, movieId }) => {
    const navigate = useNavigate();
    if (!posterPath) return null;

    const handleClick = (id) => {
        navigate(`/video/${id}`)
    }

    return (
        <div className='w-32 pr-3 md:w-48 md:pr-4 cursor-pointer'>
            <img
                key={movieId}
                src={POSTER_URL_PATH + posterPath}
                alt="movies poster"
                onClick={() => handleClick(movieId)}
                className="transition-transform duration-300 ease-in-out hover:scale-110"
            />
        </div>
    )
}

export default MovieCards;
