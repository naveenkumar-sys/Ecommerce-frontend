import React, { useContext } from 'react';
import { authContext } from '../context/AuthProvider';
import { Navigate } from 'react-router-dom';

const SellerRoute = ({ children }) => {
    const { user } = useContext(authContext);
    if (!user || user.role !== "seller") {
        return <Navigate to="/" replace />;
    }
    return children
};

export default SellerRoute;