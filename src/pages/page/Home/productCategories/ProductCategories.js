import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Loading from '../../../../shared/loading/Loading';
import CategorieCard from './CategorieCard';

const ProductCategories = () => {
    // const[catagories, setCategories] = useState([])

    // useEffect(() =>{
    //     fetch(`http://localhost:5000/categories`)
    //     .then(res => res.json())
    //     .then(data =>  setCategories(data))
    // },[])

     const {data : catagories, isLoading } = useQuery({
        queryKey : [],
        queryFn : async () => {
            const res = await (fetch(`http://localhost:5000/categories`))
            const data = await res.json()
            return data;
        }
     })

     if(isLoading){
        return <Loading></Loading>
     }

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