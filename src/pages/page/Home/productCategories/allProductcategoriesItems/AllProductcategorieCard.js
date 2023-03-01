import React from 'react';

const AllProductcategorieCard = ({ categorieItem }) => {
    const { condition, image, information, selling_price, market_price, product_name, used_time } = categorieItem;
    return (
        <div className="card leading-5 w-96 bg-base-100 shadow-xl">
            <figure><img className='w-full h-60' src={image} alt="product image" /></figure>
            <div className="card-body ">
                <h2 className="card-title">{product_name}</h2>
                <div>
                <p className='font-bold'>Condition : {condition}</p>
                <p className='font-bold'> Sell price: {selling_price}</p>
                <p className='font-bold'>Market price : {market_price}</p>
                <p className='font-bold'>Used time :{used_time}</p>
                </div>
                <p className='font-bold'>Information : {information}</p>
                <div className="card-actions justify-end">
                    
                    < label htmlFor="booking-modal" className="btn btn-primary" >  Buy Now</label >
                </div>
            </div>
        </div>


    );
};

export default AllProductcategorieCard;