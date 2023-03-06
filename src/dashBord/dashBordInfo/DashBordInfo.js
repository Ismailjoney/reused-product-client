import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/ContextProvider';

const DashBordInfo = () => {
    const { user } = useContext(AuthContext)
    const [userInfo, setUserInfo] = useState('')

    useEffect(() => {
        fetch(`http://localhost:5000/users?email=${user?.email}`)
            .then(res => res.json())
            .then(data =>  setUserInfo(data))
    }, [user?.email])


    return (
        <div>
            <div className="card w-96 bg-base-700 shadow-xl">
                <figure className="px-10 pt-10">
                <img className="mask mask-circle" src={userInfo.image}/>
                     
                </figure>
                <div className="card-body items-center ">
                    <h2 className="card-title">Name :{userInfo?.name}</h2>
                    <p>Email :{userInfo?.email}</p>
                    <p>Account Type : {userInfo?.role}</p>

                </div>
            </div>
        </div>
    );
};

export default DashBordInfo;