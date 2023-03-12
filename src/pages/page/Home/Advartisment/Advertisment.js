import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../context/ContextProvider';
import AdvertisementModal from './advertisementModal/AdvertisementModal';
import AdvertismentProductCard from './AdvertismentProductCard';

const Advertisment = () => {
    const {user} = useContext(AuthContext)
    const [advertiseProducts, setAdvertiseProducts] = useState([])
    const [modalBooking, setModalBooking] = useState(null)

    useEffect(() => {
        fetch('https://reused-product-server.vercel.app/advertismentproduct')
            .then(res => res.json())
            .then(data => {
                const products = data.filter(product => product.advertise === 'true');
                const unsold = products.filter(unsoldpdct => unsoldpdct.status !== "sold")
                setAdvertiseProducts(unsold)
            })

    }, [])


     




    return (
        <div>
            {
                advertiseProducts.length === 0 ? <></>
                    :
                    <div className='mt-10'>
                        <h2 className="text-3xl  font-bold text-center">Advertisment</h2>
                        <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
                            {
                                advertiseProducts.map(advertiseProduct => <AdvertismentProductCard
                                    key={advertiseProduct._id}
                                    advertiseProduct={advertiseProduct}
                                    setModalBooking={setModalBooking}
                                    user={user}
                                     
                                ></AdvertismentProductCard>)
                            }
                        </div>
                    </div>
            }
            {
                modalBooking &&
                 <AdvertisementModal
                 modalBooking={modalBooking}
                 setModalBooking={setModalBooking}
                 user={user}
                 ></AdvertisementModal>
             
            }
            
        </div>
    );
};

export default Advertisment;