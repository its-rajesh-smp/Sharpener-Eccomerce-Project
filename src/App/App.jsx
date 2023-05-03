import React, { useContext } from 'react';
import "./App.css"

import { Route } from 'react-router-dom/cjs/react-router-dom';
import { Redirect, Switch } from 'react-router-dom/cjs/react-router-dom.min';

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



function App(props) {

  const loginCTX = useContext(LoginContext)



  return (
    <>
      <PrimaryHeader />

      <Switch>

        <Route exact path="/"> {loginCTX.isLogin ? <Redirect to="/home" /> : <Redirect to="/login" />}  </Route>



        {loginCTX.isLogin && <Route exact path="/home"> <Home /></Route>}
        {loginCTX.isLogin && <Route path="/notification"><Notification /></Route>}
        {loginCTX.isLogin && <Route path="/home/product/:productId"><ProductDetailsPage /></Route>}


        <Route path="/changepassword"><ChangePassword /></Route>
        <Route path="/contactus"><ContactUs /></Route>
        <Route path="/error"><PageNotFound /></Route>

        {!loginCTX.isLogin && <Route exact path="/login"><Login /></Route>}
        {!loginCTX.isLogin && <Route path="/newregistration"><NewRegistration /></Route>}

        <Route path="*"> {loginCTX.isLogin ? <Redirect to="/home" /> : <Redirect to="/login" />}</Route>


      </Switch>

    </>

  );
}

export default App;



