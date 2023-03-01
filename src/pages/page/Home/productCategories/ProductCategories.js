import React, { useEffect, useState } from 'react';
import CategorieCard from './CategorieCard';

const ProductCategories = () => {
    const[catagories, setCategories] = useState([])

    useEffect(() =>{
        fetch(`http://localhost:5000/categories`)
        .then(res => res.json())
        .then(data =>  setCategories(data))
    },[])

    return (
        <div className='mt-10'>
             <h2 className="text-3xl  font-bold text-center">Product Categories</h2>
             <div className='grid grid-cols-1  gap-3 lg:grid-cols-3 justify-items-center align-items-center  mt-10 md:grid-cols-2'>
                {
                    catagories.map(catagorie =>  <CategorieCard
                    key={catagorie._id}
                    catagorie={catagorie}
                    ></CategorieCard>)
                }
             </div>
        </div>
    );
};

export default ProductCategories;