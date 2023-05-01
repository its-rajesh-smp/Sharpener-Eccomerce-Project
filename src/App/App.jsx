import React from 'react';
import "./App.css"

// Pages
import Home from '../Pages/Home/Home';
import ContactUs from '../Pages/Contact Us/ContactUs';
import Notification from '../Pages/Notification/Notification';
import PrimaryHeader from '../Components/Header/PrimaryHeader';
import { Route } from 'react-router-dom/cjs/react-router-dom';




function App(props) {
  return (

    <>
      <PrimaryHeader />

      <Route exact path="/"><Home /></Route>
      <Route path="/contactus"><ContactUs /></Route>
      <Route path="/notification"><Notification /></Route>

    </>

  );
}

export default App;
