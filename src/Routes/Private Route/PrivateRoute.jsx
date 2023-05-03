import React, { useContext } from 'react';
import LoginContext from '../../Context/LoginContext';
import { Redirect, Route } from 'react-router-dom/cjs/react-router-dom';



function PrivateRoute(props) {
    const loginCTX = useContext(LoginContext)


    if (loginCTX.isLogin === props.auth) {
        return <Route path={props.path} component={props.component} exact={props.exact} />
    } else {
        return <Redirect to="*" />
    }

}

export default PrivateRoute;
