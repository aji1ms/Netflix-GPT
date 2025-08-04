import React from 'react'
import GPTsearchBar from './GPTsearchBar';
import GPTmovieSuggestion from './GPTmovieSuggestion';
import { BACKGROUND_URL } from '../utils/Constant';

const GPTsearchPage = () => {
    return (
        <>
            <div className='fixed -z-10'>
                <img
                    className='h-screen w-screen object-cover'
                    src={BACKGROUND_URL}
                    alt="background"
                />
            </div>
            <div>
                <GPTsearchBar />
                <GPTmovieSuggestion />
            </div>
        </>

    )
}

export default GPTsearchPage;
