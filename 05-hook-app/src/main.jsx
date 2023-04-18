import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, AboutPage, LoginPage, MainApp} from "./useContext";
import HooksApp from './HooksApp';

const router = createBrowserRouter([
    {
      path: '/',
      element: <MainApp/>,
      children: [

        { index: true, element: <HomePage/>},

        {
          path: 'home',
          element: <HomePage/>
        },

        {
          path: 'about',
          element: <AboutPage/>
        },
      
        {
          path: 'login',
          element: <LoginPage/>
        }
      ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router }/>
  </React.StrictMode>
)
