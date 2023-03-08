import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/ContextProvider';
import useAdmin from '../hooks/useAdmin';
import Loading from '../shared/loading/Loading';

const AdminRoute = ({children}) => {
    const {user,loading, logOut} = useContext(AuthContext)
    const location = useLocation()
    const[isAdmin,isLoading] = useAdmin(user?.email)

    
    if(loading || isLoading ){
        return <Loading></Loading>
    }

    if(user && isAdmin){
        return children;
    }

    logOut()

    return <Navigate to='/login' state={{from: location}} replace></Navigate> 
};

export default AdminRoute;