import React from 'react';
import { toast } from 'react-toastify';

const AdvertisementModal = ({modalBooking,setModalBooking,user}) => {

    const { product_name, selling_price, _id } =  modalBooking;
    console.log(modalBooking)


    
    const  handleBooking = event => {
        event.preventDefault();
        setModalBooking(null)
        const form = event.target;

        const  displayName = user?.displayName;
        const  email = user?.email;
        const customerMeetLocation = form.location.value;
        const customerPhoneNumber = form.phone.value;


        const bookingDetails = {
            displayName,
            email,
            customerMeetLocation,
            customerPhoneNumber,
            productname: product_name,
            sellingPrice: selling_price,
            productId: _id
        }
        console.log(bookingDetails)



        fetch(`https://reused-product-server.vercel.app/productbooking`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(bookingDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    toast('Product Booking SucessFully')
                }
            })
    }






    return (
        <div>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            < input type="checkbox" id="advrtismentModalBooking" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="advrtismentModalBooking" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>

                    <form onSubmit={handleBooking}>
                        <p>Product Name :</p>
                        <input type="text" defaultValue={product_name} placeholder="name" className="input input-bordered input-primary w-full" readOnly />
                        <p>Selling Price :</p>
                        <input type="text" defaultValue={selling_price} placeholder="name" className="input input-bordered  input-primary w-full  " readOnly />
                        <p>Your Name :</p>
                        <input name="name" type="text" defaultValue={user?.displayName} placeholder="name" className="input input-bordered input-primary w-full mt-2" readOnly />
                        <p>Your Email:</p>
                        <input name="email" type="email" defaultValue={user?.email} placeholder="email" className="input input-bordered input-primary w-full mt-2" readOnly />
                        <p>Location :</p>
                        <input name="location" type="text" placeholder="location" className="input input-bordered input-primary w-full mt-2" required />
                        <p>Phone Number :</p>
                        <input name="phone" type="phone" placeholder="phone number" className="input input-bordered input-primary w-full mt-2" required />

                        <input className='btn btn-primary mt-2 w-full' type="submit" value="Submit" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdvertisementModal;