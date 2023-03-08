import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='h-screen'>
        <section className="flex items-center h-full p-16 text-teal-900 ">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <img src="https://i.ibb.co/PWTYxSs/depositphotos-80897014-stock-photo-page-not-found.webp" alt="" />
                    <Link rel="noopener noreferrer" to="/" className="px-8 py-3 font-semibold rounded bg-teal-400 text-white">Back to homepage</Link>
                </div>
            </div>
        </section>
    </div>
    );
};

export default ErrorPage;