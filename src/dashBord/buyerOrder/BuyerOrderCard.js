import React from 'react';

const BuyerOrderCard = ({ bookingProduct,handleDelete }) => {
    const{customerMeetLocation, productname, sellingPrice,_id} = bookingProduct;

    
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
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