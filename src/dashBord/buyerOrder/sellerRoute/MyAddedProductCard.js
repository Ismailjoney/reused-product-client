import React from 'react';
import { Link } from 'react-router-dom';

const MyAddedProductCard = ({ myProduct, handleDelete, handleAdvertisment, handdleSold }) => {

    const { condition, date, image, information, market_price, product_name, seller, sellerLocation, sellerNumber, selling_price, used_time, _id, status, paid } = myProduct;



    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure className='w-2/5 h-5/6 mt-10'><img src={image} alt="Album" /></figure>
            <div className="card-body">
                <div>
                    {
                        status !== 'sold' ?
                            <>
                                <p className='bg-green-500 w-20 text-white rounded-full px-3'>Available</p>
                            </>
                            :
                            <>
                                <p className='bg-red-500 w-14 text-white rounded-full px-3'>Sold</p>

                            </>
                    }
                </div>
                <p>Post date : {date}</p>
                <h2 className="card-title">{product_name}</h2>
                <p>Condition : {condition}</p>
                <p>Seller : {seller}</p>
                <p>Used time: {used_time}</p>
                <p>Phone : {sellerNumber}</p>
                <p>Seller location : {sellerLocation}</p>
                <p>Market Price : {market_price}</p>
                <p>Resale Price : {selling_price}</p>
                <p>Information : {information}</p>
                <div className="card-actions justify-start">
                    <button onClick={() => handleDelete(_id)} className="btn  btn-primary">Delete</button>

                    {
                        myProduct.advertise === 'true' ?
                            <>
                                {/* <p className='py-0'>
                                    Product added Advertisment
                                </p> */}
                                <Link to='/' className='underline'>Advertise Seciton</Link>

                            </>
                            :
                            <>
                                <button onClick={() => handleAdvertisment(_id)} className="btn  btn-primary">Advertisment</button>
                            </>
                    }

                    {
                        status !== 'sold' ?
                            <button onClick={() => handdleSold(_id)} className="btn  btn-primary">sold</button>
                            :
                            <></>
                    }

                </div>
            </div>
        </div>
    );
};

export default MyAddedProductCard;





