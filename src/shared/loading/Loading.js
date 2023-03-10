import React from 'react';

const Loading = () => {
    return (
        <div className="flex justify-center justify-items-center items-center">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full  text-blue-300" role="status">
            <span className="visually-hidden"></span>
        </div>
    </div>
    );
};

export default Loading;