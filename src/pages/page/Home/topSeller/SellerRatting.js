import React from 'react';

const SellerRatting = () => {
    return (
        <div className='flex justify-center mt-2'>
            <div className="rating rating-sm justify-center">
        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
      </div>
        </div>
    );
};

export default SellerRatting;