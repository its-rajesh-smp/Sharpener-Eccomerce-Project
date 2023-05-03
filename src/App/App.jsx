import React from 'react';
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



function App(props) {
  return (

    <>
      <PrimaryHeader />

      <Switch>
        <Route exact path="/"><Redirect to="/home"><Home /></Redirect></Route>
        {/* <Route exact path="/home"><Home /></Route> */}
        <Route exact path="/home"><Login /></Route>
        <Route path="/contactus"><ContactUs /></Route>
        <Route path="/notification"><Notification /></Route>
        <Route path="/home/product"><ProductDetailsPage /></Route>

      </Switch>
    </>

  );
}

export default App;
