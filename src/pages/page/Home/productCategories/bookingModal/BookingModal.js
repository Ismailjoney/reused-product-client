import React from 'react';

const BookingModal = () => {
    return (
        <div>
            {/* Put this part before </body> tag */}
            < input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2  font-bold">✕</label>
                    <input type="text" placeholder="name" className="input input-bordered input-primary w-full mt-6" />
                    <input type="email" placeholder="email" className="input input-bordered input-primary w-full mt-2" />
                    <input type="text" placeholder="item name" className="input input-bordered input-primary w-full mt-2" />
                    <input type="text" placeholder="price" className="input input-bordered input-primary w-full mt-2" />
                    <input type="text" placeholder="location" className="input input-bordered input-primary w-full mt-2" />
                    <input type="button" value="Order Now" className="text-black text-bold btn btn-primary w-full mt-2 my-2" />
                </div>
            </div>
        </div>
    );
};

export default BookingModal;