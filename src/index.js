import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/home';
import Html from './Pages/htmlPage';
import Css from './Pages/cssPage';
import JavaScript from './Pages/javascript';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <h2 style={{color:"red" , textAlign:"center"}}>Not Found This Page</h2>,
  },
  {
    path: "/html",
    element: <Html/>,
  },
  {
    path: "/css",
    element: <Css/>,
  },
  {
    path: "/javascript",
    element: <JavaScript/>,
  },

  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);


