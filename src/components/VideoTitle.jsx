import React from 'react';
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-screen aspect-video pt-[30%] md:pt-[25%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
            <h1 className='text-2xl md:text-4xl font-bold'>{title}</h1>
            <p className='hidden md:inline-block md:w-2/4 md:text-md text-gray-400 py-4 md:py-6'>{overview}</p>
            <div className='flex flex-wrap gap-3 my-2 md:my-0'>
                <button
                    className='flex items-center gap-2 bg-white text-black py-2 px-4 md:py-2.5 md:px-6 rounded-sm hover:bg-gray-200 text-sm md:text-base'>
                    <FaPlay className='w-4 h-4 md:w-6 md:h-6' /> Play
                </button>
                <button
                    className='flex items-center gap-2 bg-gray-400 px-4 py-2 md:px-6 md:py-2.5 font-bold rounded-sm bg-opacity-45 text-sm md:text-base'>
                    <IoMdInformationCircleOutline className='w-6 h-6 md:w-6 md:h-6' /> More Info
                </button>
            </div>
        </div>
    )
}

export default VideoTitle;
