import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineLogout } from "react-icons/hi";
import { addUser, removeUser } from '../utils/UserSlice';
import { ICON, LOGO } from '../utils/Constant';
import { CiSearch } from "react-icons/ci";
import { toggleSearchView } from '../utils/GPTslice';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const [gptbtn, setGptbtn] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                }))
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });
        return () => unsubscribe();
    }, []);

    const handleGPTsearch = () => {
        setGptbtn(!gptbtn)
        dispatch(toggleSearchView())
    }

    const handleSignout = () => {
        signOut(auth).then(() => { })
            .catch((error) => {
                navigate("error")
            });
    }

    return (
        <div className="absolute w-full px-6 md:px-12 py-3 bg-gradient-to-b from-black via-black/80 to-transparent z-10 flex flex-col md:flex-row justify-between items-center">
            <img
                className='w-40 mx-auto md:mx-0 cursor-pointer transition-transform duration-300 hover:scale-105'
                src={LOGO}
                alt="logo"
            />
            {user && (
                <div className='flex items-center gap-3 py-4'>
                    <button
                        onClick={handleGPTsearch}
                        className='bg-gradient-to-r from-purple-600 to-purple-700 text-white py-2.5 px-5 rounded-lg font-medium shadow-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 hover:shadow-purple-500/50 hover:scale-105 flex items-center gap-2'>
                        <span>{gptbtn ? "GPT Search" : "Home"}</span>
                        <CiSearch className='text-2xl font-bold' />
                    </button>

                    <div className='w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500 shadow-lg hover:blue-purple-400 transition-all duration-300 hover:scale-110 cursor-pointer'>
                        <img
                            className='w-full h-full object-cover'
                            src={ICON}
                            alt="icon"
                        />
                    </div>

                    <button
                        onClick={handleSignout}
                        className='w-12 h-12 flex items-center justify-center text-2xl text-white bg-gradient-to-r from-red-500 to-red-600 rounded-full shadow-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 hover:shadow-red-500/50 hover:scale-110'>
                        <HiOutlineLogout />
                    </button>
                </div>
            )}
        </div>
    )
}

export default Header;