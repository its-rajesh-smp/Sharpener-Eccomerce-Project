import React from 'react';
import "./App.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// Pages
import Home from '../Pages/Home/Home';
import ContactUs from '../Pages/Contact Us/ContactUs';
import Notification from '../Pages/Notification/Notification';


const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/contactus', element: <ContactUs /> },
  { path: '/notification', element: < Notification /> },
])


function App(props) {
  return (
    <RouterProvider router={router} >



    </RouterProvider>


  );
}

export default App;
