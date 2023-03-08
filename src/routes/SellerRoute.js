import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/ContextProvider';
import useSeller from '../hooks/useSeller';
import Loading from '../shared/loading/Loading';

const SellerRoute = ({children}) => {
    const {user,loading, logOut} = useContext(AuthContext)
    const location = useLocation()
    const [isSeller, isSellerLoading] = useSeller(user?.email)

    
    if(loading || isSellerLoading ){
        return <Loading></Loading>
    }

    if(user &&  isSellerLoading){
        return children;
    }


    logOut()

    return <Navigate to='/login' state={{from: location}} replace></Navigate> 
};

export default SellerRoute;