import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../bookingModal/BookingModal';
import AllProductcategorieCard from './AllProductcategorieCard';

const AllProductcategoriesItems = () => {
    const categorieItems = useLoaderData()
    console.log(categorieItems)
    return (
        <div>
            <h2 className="text-3xl font-bold">hh</h2>
            <div className='grid grid-cols-1  gap-3 lg:grid-cols-3 justify-items-center align-items-center  mt-10 md:grid-cols-3'>
                {
                    categorieItems.map(categorieItem => <AllProductcategorieCard
                    key={categorieItem._id}
                    categorieItem={categorieItem}
                    ></AllProductcategorieCard>)
                }
            </div>
            {
                <BookingModal></BookingModal>
            }
            
        </div>
    );
};

export default AllProductcategoriesItems;