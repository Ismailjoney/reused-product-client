import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../../context/ContextProvider';
import useBuyer from '../../../../../hooks/useBuyer';
import useSeller from '../../../../../hooks/useSeller';

const AllProductcategorieCard = ({ categorieItem, setCategorieItemDetails }) => {
    const { condition, image,  information, selling_price, market_price, product_name, used_time,seller, sellerNumber,status } = categorieItem;
    console.log(categorieItem)

    const {user} = useContext(AuthContext);
    const[isSeller] = useSeller(user?.email)

    return (
        <div className="card  w-96 bg-base-100 shadow-xl mt-10">
            <figure><img className='w-full h-60' src={image} alt="product image" /></figure>
            <div className="card-body ">
                <div>
                <div className=' '>
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
                </div>
                <h2 className="card-title">{product_name}</h2>
                <div>
                <p className='font-bold'>Seller: {seller}</p>
                <p className='font-bold'> Phone : {sellerNumber}</p>
                <p className='font-bold'>Condition : {condition}</p>
                <p className='font-bold'> Sell price: {selling_price}</p>
                <p className='font-bold'>Market price : {market_price}</p>
                <p className='font-bold'>Used time :{used_time}</p>
                </div>
                <p className=''> Information :{information}</p>
                <div className="card-actions justify-end">
                    {
                         isSeller ?
                        ` You can't booked product because your account type seller `
                         :
                         < label 
                         onClick={ () => setCategorieItemDetails(categorieItem)} htmlFor="booking-modal" className="btn btn-primary" > Buy Now</label >
                    }
                </div>
            </div>
        </div>


    );
};

export default AllProductcategorieCard;