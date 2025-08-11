import React from 'react';

const GPTShimmer = () => {
    return (
        <div className="p-4 m-4 bg-black bg-opacity-70">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {Array(6).fill("").map((_, index) => (
                    <div
                        key={index}
                        className="aspect-[3/4] bg-gray-50 animate-pulse"
                    />
                ))}
            </div>
        </div>  
    );
};

export default GPTShimmer;
