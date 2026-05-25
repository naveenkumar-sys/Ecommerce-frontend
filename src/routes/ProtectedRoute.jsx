import React, { useContext } from 'react';
import { authContext } from '../context/AuthProvider';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {token}=useContext(authContext);
    if(!token){
        return <Navigate to="/" replace />;
    }
    return children;
};

export default ProtectedRoute;