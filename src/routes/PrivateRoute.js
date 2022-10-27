import React, {useContext} from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import {AuthContext} from '../contexts/UserContext';
import {Loader} from 'rsuite';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading) {
        return <Loader size="lg" content="Large" />;
    }
    if(user && user.uid) {
        return children;
    }

    return <Navigate to={"/login"} state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;