import React from 'react';
import useBuyer from '../../../../hooks/useBuyer'

const AdvertismentProductCard = ({ advertiseProduct, setModalBooking, user }) => {
    const { condition, image, information, selling_price, market_price, product_name, used_time, seller, sellerNumber, _id, status,date } = advertiseProduct;

    const [isBuyer] = useBuyer(user?.email)

    return (
        <div className="card  w-96 bg-base-100 shadow-xl sm:mt-7">
            <figure><img className='w-full h-60' src={image} alt="product image" /></figure>
            <div className="card-body ">
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
                <h2 className="card-title">{product_name}</h2>
                <div>
                    <p>Post on : {date}</p>
                    <p className='font-bold'> Seller Name : {seller}</p>
                    <p className='font-bold'> Phone Number : {sellerNumber}</p>
                    <p className='font-bold'>Condition : {condition}</p>
                    <p className='font-bold'> Sell price: {selling_price}</p>
                    <p className='font-bold'>Market price : {market_price}</p>
                    <p className='font-bold'>Used time :{used_time}</p>
                </div>
                <p className=''> Information :{information}</p>

                <div className="card-actions justify-end">
                    {
                        isBuyer ?
                       <>
                        < label onClick={() => setModalBooking(advertiseProduct)} htmlFor="advrtismentModalBooking" className="btn btn-primary" > Book Now</label >
                       </>
                        :
                        `you can't booked product becouse you are seller`
                    }
               
                    
                </div>
            </div>
        </div>
    );
};

export default AdvertismentProductCard;