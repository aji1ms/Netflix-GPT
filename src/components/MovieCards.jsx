import React from 'react';
import { POSTER_URL_PATH } from '../utils/Constant';

const MovieCards = ({ posterPath }) => {
    if (!posterPath) return null;
    return (
        <div className='w-32 pr-3 md:w-48 md:pr-4'>
            <img
                src={POSTER_URL_PATH + posterPath}
                alt="movies poster"
            />
        </div>
    )
}

export default MovieCards;
