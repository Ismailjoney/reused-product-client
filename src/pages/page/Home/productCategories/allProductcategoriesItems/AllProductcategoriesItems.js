import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../../context/ContextProvider';
import BookingModal from '../bookingModal/BookingModal';
import AllProductcategorieCard from './AllProductcategorieCard';

const AllProductcategoriesItems = () => {
    const categorieItems = useLoaderData()
    const [categorieItemDetails, setCategorieItemDetails] = useState(null)
    const {user} = useContext(AuthContext)

    return (
        <div>
            <h2 className="text-3xl font-bold">Our Product Collection</h2>
            <div className='grid grid-cols-1  gap-3 lg:grid-cols-3 justify-items-center align-items-center  mt-10 md:grid-cols-3'>
                {
                    categorieItems.map(categorieItem => <AllProductcategorieCard
                    key={categorieItem._id}
                    categorieItem={categorieItem}
                    setCategorieItemDetails={setCategorieItemDetails}
                    ></AllProductcategorieCard>)
                }
            </div>
            {
                categorieItemDetails &&
                <BookingModal
                
                categorieItemDetails={categorieItemDetails}
                setCategorieItemDetails={setCategorieItemDetails}
                user={user}
                ></BookingModal>
            }
            
        </div>
    );
};

export default AllProductcategoriesItems;