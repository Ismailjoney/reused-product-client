import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/ContextProvider';
import useBuyer from '../hooks/useBuyer';
import Loading from '../shared/loading/Loading';

const  BuyerRoute = ({children}) => {
    const {user,loading, logOut} = useContext(AuthContext)
    const location = useLocation()
    const[isBuyerer, isBuyerLoading] = useBuyer(user?.email)

    if(loading || isBuyerLoading ){
        return <Loading></Loading>
    }

    if(user && isBuyerer){
        return children;
    }

    logOut()

    return <Navigate to='/login' state={{from: location}} replace></Navigate> 
};

export default  BuyerRoute;