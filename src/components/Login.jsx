import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/Validation';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handlBtnClick = () => {
        const nameVal = name.current?.value || "";
        const emailVal = email.current.value;
        const passwordVal = password.current.value;

        const message = checkValidData(nameVal, emailVal, passwordVal, isSignInForm);
        setErrorMessage(message);

        if (message) return;
    };


    return (
        <div className="relative min-h-screen">
            <Header />
            <div className="fixed inset-0 bg-black md:hidden z-0"></div>
            <div className='fixed inset-0 hidden md:block'>
                <img
                    className='h-screen w-screen object-cover'
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
                    alt="background"
                />
            </div>
            <form onSubmit={(e) => e.preventDefault()}
                className='absolute w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 p-6 sm:p-12 my-16 sm:my-10 lg:my-20 rounded-md bg-black bg-opacity-80
                 mx-auto left-0 right-0 text-white'
            >
                <h1
                    className='font-bold text-3xl py-4'
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm && (
                    <input
                        ref={name}
                        type="text"
                        placeholder='Full Name'
                        className='w-full p-4 my-4 rounded-sm bg-gray-900 bg-opacity-50 border'
                    />
                )}
                <input
                    ref={email}
                    type="text"
                    placeholder='Email Address'
                    className='w-full p-4 my-4 rounded-sm bg-gray-900 bg-opacity-50 border'
                />
                <input
                    ref={password}
                    type="password"
                    placeholder='Password'
                    className='w-full p-4 my-4 rounded-sm bg-gray-900 bg-opacity-50 border'
                />
                <p className='text-red-700 font-medium'>{errorMessage}</p>
                <button onClick={handlBtnClick}
                    className='w-full bg-red-600 font-medium p-3 my-6 rounded-sm'
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign up now." : "Already registered? Sign In"}
                </p>
                <p className='py-1 text-gray-400'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
            </form>
        </div >
    )
}

export default Login
