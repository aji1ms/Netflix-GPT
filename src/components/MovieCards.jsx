import React from 'react';
import { POSTER_URL_PATH } from '../utils/Constant';

const MovieCards = ({ posterPath }) => {
    if (!posterPath) return null;
    return (
        <div className='w-48 pr-4'>
            <img
                src={POSTER_URL_PATH + posterPath}
                alt="movies poster"
            />
        </div>
    )
}

export default MovieCards;
