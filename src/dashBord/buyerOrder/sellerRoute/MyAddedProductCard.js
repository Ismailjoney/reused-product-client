import React from 'react';

const MyAddedProductCard = ({ myProduct, handleDelete }) => {

    const { condition, date, image, information, market_price, product_name, seller, sellerLocation, sellerNumber, selling_price, used_time, _id } = myProduct;



    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure className='w-2/5 h-5/6 mt-10'><img src={image} alt="Album" /></figure>
            <div className="card-body">
                <p>Post date : {date}</p>
                <h2 className="card-title">{product_name}</h2>
                <p>Condition : {condition}</p>
                <p>Seller : {seller}</p>
                <p>Seller : {seller}</p>
                <p>Used time: {used_time}</p>
                <p>Seller location: {sellerNumber}</p>
                <p>Seller location : {sellerLocation}</p>
                <p>Market Price : {market_price}</p>
                <p>Resale Price : {selling_price}</p>
                <p>Resale Price : {selling_price}</p>
                <p>Information : {information}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleDelete(_id)} className="btn  btn-primary">Delete</button>
                </div>

            </div>
        </div>
    );
};

export default MyAddedProductCard;





