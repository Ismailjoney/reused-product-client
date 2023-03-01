import React from 'react';

const BookingModal = () => {
    return (
        <div>
            {/* The button to open modal */}
            

            {/* Put this part before </body> tag */}
            < input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <input name="name" type="text"  disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email"  disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" required />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    
                </div>
            </div>
        </div>
    );
};

export default BookingModal;