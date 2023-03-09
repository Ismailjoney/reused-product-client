import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/ContextProvider';
import Loading from '../../shared/loading/Loading';

const AllSellers = () => {
    const { user } = useContext(AuthContext)

    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ['seller', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allusers`)
            const data = await res.json()
            const buyers = data.filter(user => user.role === 'seller')

            return buyers;
        }
    })

    const handdleSellerDelete = id => {
        fetch(`http://localhost:5000/allusers/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    refetch()
                }
            })
    }



    // const handleVerifySeller = (email) => {

    //     fetch(`http://localhost:5000//verifyseller?email=${email}`, {
    //         method: 'PUT',
    //         headers: {
    //             authorization : `bearer ${localStorage.getItem('resaleUserToken')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.modifiedCount > 0) {
                    
    //                 toast.success('SellerVerified')
    //                 refetch()
    //             }
    //         })

    // }





    if(isLoading){
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className="text-3xl">All Seller</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td><button onClick={() => handdleSellerDelete(user._id)} className='btn btn-xs  btn-primary'>Delete</button></td>
                                {/* <td><button onClick={() =>  handleVerifySeller(user._id)} className='btn btn-xs  btn-primary'>Verify Seller</button></td> */}
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;