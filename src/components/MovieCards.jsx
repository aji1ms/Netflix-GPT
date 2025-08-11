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
        <div className='w-32 pr-3 md:w-48 md:pr-4'>
            <img
                key={movieId}
                src={POSTER_URL_PATH + posterPath}
                alt="movies poster"
                onClick={() => handleClick(movieId)}
            />
        </div>
    )
}

export default MovieCards;
