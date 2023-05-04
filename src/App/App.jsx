import React, { useContext } from 'react';
import "./App.css"

import { Route } from 'react-router-dom/cjs/react-router-dom';
import { Redirect, Switch } from 'react-router-dom/cjs/react-router-dom.min';

import PrivateRoute from '../Routes/Private Route/PrivateRoute';
// Pages
import Home from '../Pages/Home/Home';
import ContactUs from '../Pages/Contact Us/ContactUs';
import Notification from '../Pages/Notification/Notification';
import PrimaryHeader from '../Components/Header/PrimaryHeader';
import ProductDetailsPage from '../Pages/Product Details/ProductDetailsPage';
import Login from '../Pages/Login/Login';
import NewRegistration from '../Pages/New Registration/NewRegistration';
import ChangePassword from '../Pages/Change Password/ChangePassword';
import LoginContext from '../Context/LoginContext';
import PageNotFound from '../Pages/Page Not Found/PageNotFound';
import LoadingPage from '../Pages/Loading Page/LoadingPage';




function App(props) {

  const loginCTX = useContext(LoginContext)


  if (loginCTX.loadingScreen) {
    return <LoadingPage />
  }



  return (
    <>

      <PrimaryHeader />

      <Switch>

        <Route exact path="/"> {loginCTX.isLogin ? <Redirect to="/home" /> : <Redirect to="/login" />}</Route>

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

export default App;



