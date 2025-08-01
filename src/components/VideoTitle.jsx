import React from 'react';
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
            <h1 className='text-4xl font-bold'>{title}</h1>
            <p className='w-1/4 text-md text-gray-400 py-6'>{overview}</p>
            <div>
                <button
                    className='bg-white text-black py-2.5 px-6 rounded-sm hover:bg-gray-200'>
                    <FaPlay className='inline w-6 h-6' /> Play
                </button>
                <button
                    className='mx-2 bg-gray-400 px-6 py-2 font-bold rounded-sm bg-opacity-45'
                >
                    <IoMdInformationCircleOutline className='inline w-8 h-8' />   More Info
                </button>
            </div>
        </div>
    )
}

export default VideoTitle;
