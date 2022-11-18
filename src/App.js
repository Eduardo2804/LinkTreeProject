
//setting the router for every pages

import {createBrowserRouter} from "react-router-dom"

import Home from "./pages/Home"

import Login from "./pages/Login"

import Admin from "./pages/Admin"

import Error from "./pages/Error"

import Private from "./routers/Private"

const router = createBrowserRouter([

  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/admin",
    element: <Private><Admin/></Private>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "*",
    element: <Error/>
  }


])

export {router};