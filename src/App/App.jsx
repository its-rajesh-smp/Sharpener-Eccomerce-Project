import React, { useContext } from 'react';
import "./App.css"
import PrimaryHeader from '../Components/Header/PrimaryHeader';
import LoginContext from '../Context/LoginContext';

import MyRoutes from '../Routes/Private Route/MyRoutes';




function App(props) {




  return (
    <>
      <PrimaryHeader />
      <MyRoutes />
    </>

  );
}

export default App;



