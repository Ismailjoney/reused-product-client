import React from 'react';

const BuyerOrderCard = ({ bookingProduct,handleDelete }) => {
    const{customerMeetLocation, productname, sellingPrice,_id, image } = bookingProduct;

    
    return (
        <div className="card card-side bg-base-100 shadow-xl  h-44 mt-4">
            <figure className='w-64 p-2'  ><img  src={image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">Product Name : {productname}</h2>
                <p>Product Price : {sellingPrice}</p>
                <p>Location : {customerMeetLocation}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => {handleDelete(_id)}} className="btn btn-sm btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default BuyerOrderCard;