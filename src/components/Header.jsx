import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useSelector } from 'react-redux';

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user);

    const handleSignout = () => {
        signOut(auth).then(() => {
            navigate("/")
        }).catch((error) => {
            navigate("error")
        });
    }
    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img
                className='w-36'
                src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png"
                alt="logo"
            />
            {user && <div className='flex py-4'>
                <img
                    className='hidden sm:block w-12 h-12 md:w-12 md:h-12 cursor-pointer'
                    src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.webp"
                    alt="icon"
                />
                <button
                    onClick={handleSignout}
                    className='bg-red-600 ml-2 text-white px-4 font-bold hover:bg-red-700'>Sign Out</button>
            </div>}
        </div>
    )
}

export default Header;