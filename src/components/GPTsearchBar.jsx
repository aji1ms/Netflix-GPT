import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addGptMovieResults } from "../utils/GPTslice";
import gptSearchHelper from '../hooks/gptSearchHelper';

const GPTsearchBar = () => {
    const dispatch = useDispatch();
    const searchText = useRef();
    const [isError, setIsError] = useState("");

    const handleGPTsearch = async () => {
        const searchQuery = searchText.current.value;
        try {
            const result = await gptSearchHelper(searchQuery);
            dispatch(addGptMovieResults(result));
        } catch (err) {
            setIsError(err.message || "Something went wrong!");
        }
    };

    return (
        <div className='flex justify-center pt-[5%]'>
            <form
                onSubmit={(e) => e.preventDefault()}
                className='w-6/12 bg-black grid grid-cols-12'>
                <input
                    ref={searchText}
                    className='p-4 m-4 col-span-9'
                    type="text"
                    placeholder='What Would You Like To Watch Today?'
                />
                <button
                    onClick={handleGPTsearch}
                    className='py-2 px-4 m-4 bg-red-600 hover:bg-red-700 text-white col-span-3'
                >Search</button>
                {isError && (<p className='text-red-600 font-bold px-4 pb-2'>{isError}</p>)}
            </form>
        </div>
    )
}

export default GPTsearchBar;
