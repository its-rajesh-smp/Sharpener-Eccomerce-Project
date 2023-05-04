import React, { useContext } from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom';
import { Redirect, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import PrivateRoute from './PrivateRoute';
import LoginContext from '../../Context/LoginContext';


// Pages
import Home from '../../Pages/Home/Home';
import Notification from '../../Pages/Notification/Notification';
import ProductDetailsPage from '../../Pages/Product Details/ProductDetailsPage';
import ChangePassword from '../../Pages/Change Password/ChangePassword';
import ContactUs from '../../Pages/Contact Us/ContactUs';
import PageNotFound from '../../Pages/Page Not Found/PageNotFound';
import Login from '../../Pages/Login/Login';
import NewRegistration from '../../Pages/New Registration/NewRegistration';
import LoadingPage from "../../Pages/Loading Page/LoadingPage"

function MyRoutes(props) {

    const loginCTX = useContext(LoginContext)

    if (loginCTX.loadingScreen) {
        return <LoadingPage />
    }

    return (
        <>
            <Switch>

                <Route exact path="/"> {loginCTX.loginState.isLogin ? <Redirect to="/home" /> : <Redirect to="/login" />}</Route>

                <PrivateRoute auth={true} exact={true} component={Home} path="/home" />
                <PrivateRoute auth={true} exact={false} component={Notification} path="/notification" />
                <PrivateRoute auth={true} exact={false} component={ProductDetailsPage} path="/home/product/:productId" />


                <Route path="/changepassword"><ChangePassword /></Route>
                <Route path="/contactus"><ContactUs /></Route>
                <Route path="/error"><PageNotFound /></Route>

                <PrivateRoute auth={false} exact={true} component={Login} path="/login" />
                <PrivateRoute auth={false} exact={false} component={NewRegistration} path="/newregistration" />

                <Route path="*"><Redirect to="/" /></Route>

            </Switch>
        </>
    );
}

export default MyRoutes;
