import React, { useEffect } from 'react';
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
        dispatch(toggleSearchView())
    }

    const handleSignout = () => {
        signOut(auth).then(() => { })
            .catch((error) => {
                navigate("error")
            });
    }

    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img
                className='w-36'
                src={LOGO}
                alt="logo"
            />
            {user && <div className='flex py-4'>
                <button
                    onClick={handleGPTsearch}
                    className='bg-purple-700 text-white py-2 px-4 mr-2 rounded-sm hover:bg-purple-800 items-center'>
                    GPT Search<CiSearch className='inline-block font-extrabold text-2xl ml-1'
                    />
                </button>
                <img
                    className='hidden sm:block w-12 h-12 md:w-12 md:h-12 cursor-pointer'
                    src={ICON}
                    alt="icon"
                />
                <button
                    onClick={handleSignout}
                    className='text-4xl ml-2 text-white pl-2 cursor-pointer bg-red-500 rounded-full'>
                    <HiOutlineLogout />
                </button>
            </div>}
        </div >
    )
}

export default Header;