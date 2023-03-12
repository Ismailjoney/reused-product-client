import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/ContextProvider';
import Loading from '../../../shared/loading/Loading';
import MyAddedProductCard from './MyAddedProductCard';

const MyAddedProducts = () => {
    const {user} = useContext(AuthContext)

    const {data: myProducts = [],isLoading ,refetch}  = useQuery({
        queryKey: ['sellerproduct', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://reused-product-server.vercel.app/sellerproduct?email=${user?.email}`,{
                headers : {
                    authorization : `bearer ${localStorage.getItem('resaleUserToken')}`
                }
            })
            const data = await res.json()
            return data;
        }
    })


    //handdle advertisment
    const handleAdvertisment = id => {
        fetch(`https://reused-product-server.vercel.app/advertiseproduct/${id}`, {
            method: 'PUT',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('bikehutAccessToken')}`

            // }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                refetch()
                toast.success('Product is Live on Ad Section')
        })
    }

    const handleDelete = (id) => {
        fetch(`https://reused-product-server.vercel.app/sellerproduct/${id}`, {
            method: 'DELETE',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('resaleUserToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    toast.error('Delete SuccessFully')
            }
        })
    }

    const handdleSold = id => {
        console.log(id)
        fetch(`https://reused-product-server.vercel.app/productsold/${id}`,{
            method : 'PUT'
        })
        .then(res => res.json())
        .then(data =>{
            // console.log(data)
            refetch()
            toast('Product Sold')
        })
    }

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-3xl">My Added products {myProducts.length}</h2>
            
            {
                myProducts.map(myProduct => <MyAddedProductCard
                key={myProduct._id}
                myProduct={myProduct}
                handleDelete={handleDelete}
                handleAdvertisment={handleAdvertisment}
                handdleSold={handdleSold}
                ></MyAddedProductCard>)
            }
        </div>
    );
};

export default MyAddedProducts;