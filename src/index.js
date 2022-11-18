import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { router } from './App';

//library router for routing all the roters
import {RouterProvider} from "react-router-dom"

//library toast for informations pop up (sucess or error)
import "react-toastify/dist/ReactToastify.css";
import{ToastContainer} from "react-toastify" 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer autoClose={1500}/>
    <RouterProvider router = {router} />
  </React.StrictMode>
);



