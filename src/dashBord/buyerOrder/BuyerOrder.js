import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/ContextProvider';
import Loading from '../../shared/loading/Loading';
import BuyerOrderCard from './BuyerOrderCard';

const BuyerOrder = () => {
    const { user } = useContext(AuthContext)

    const { data: bookingProducts, isLoading, refetch } = useQuery({
        queryKey: ['mybookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://reused-product-server.vercel.app/mybookings?email=${user?.email}`,{
                headers : {
                    authorization : `bearer ${localStorage.getItem('resaleUserToken')}`
                }
            })
            const data = await res.json()
            return data;
        }
    })
   
    console.log(bookingProducts)

    const handleDelete = (id) => {
        fetch(`https://reused-product-server.vercel.app/bookings/${id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    toast.error('Order Delete SuccessFully')
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
          
                 <h2 className="text-3xl text-bold  ">My Order {bookingProducts.length}</h2>
         
            <div>
                {
                    bookingProducts?.map(bookingProduct => <BuyerOrderCard
                        key={bookingProduct._id}
                        bookingProduct={bookingProduct}
                        handleDelete={handleDelete}
                    ></BuyerOrderCard>)
                }
            </div>
        </div>
    );
};

export default BuyerOrder;