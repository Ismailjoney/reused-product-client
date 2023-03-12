import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/ContextProvider';
import Loading from '../../shared/loading/Loading';
 

const AllBuyers = () => {
    const { user } = useContext(AuthContext)

    const { data: users, isLoading,refetch } = useQuery({
        queryKey: ['buyer', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://reused-product-server.vercel.app/allusers`)
            const data = await res.json()
            const buyers = data.filter(user => user.role === 'buyer')

            return buyers;
        }
    })




        const handdleBuyerDelete = (id) => {
            fetch(`https://reused-product-server.vercel.app/allusers/${id}`,{
                method : 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    refetch()
                }
            })
        }


    if (isLoading) {
        return <Loading></Loading>;
    }


    return (
        <div>
            <h2 className="text-3xl">All Users</h2>
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
                                {/* <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td> */}
                                <td><button onClick={() => handdleBuyerDelete( user._id)} className='btn btn-xs  btn-primary'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;