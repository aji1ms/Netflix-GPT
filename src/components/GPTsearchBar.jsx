import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addGptMovieResults } from "../utils/GPTslice";
import gptSearchHelper from '../hooks/gptSearchHelper';
import GPTShimmer from './GptShimmer';
import { CiSearch } from 'react-icons/ci';

const GPTsearchBar = () => {
    const dispatch = useDispatch();
    const searchText = useRef();
    const [isError, setIsError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleGPTsearch = async () => {
        const searchQuery = searchText.current.value;
        try {
            setLoading(true);
            const result = await gptSearchHelper(searchQuery);
            dispatch(addGptMovieResults(result));
        } catch (err) {
            setIsError(err.message || "Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className='flex justify-center pt-[50%] md:pt-[8%] px-4'>
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className='w-full md:w-7/12 lg:w-6/12'>
                    <div className='bg-black/70 rounded-lg p-4 shadow-lg'>
                        <div className='flex flex-col md:flex-row gap-3'>
                            <input
                                ref={searchText}
                                className='flex-1 p-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-600 transition-colors duration-300'
                                type="text"
                                placeholder='What would you like to watch today?'
                            />
                            <button
                                onClick={handleGPTsearch}
                                className='px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-300'
                            >
                                Search
                            </button>
                        </div>
                        {isError && (
                            <p className='text-red-500 font-medium mt-3 px-2'>{isError}</p>
                        )}
                    </div>
                </form>
            </div>
            {loading && <GPTShimmer />}
        </>
    )
}

export default GPTsearchBar;
