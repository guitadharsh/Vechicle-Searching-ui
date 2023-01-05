import { createBrowserRouter } from "react-router-dom";
import LandingPage from '../scenes/LandingPage'
import Home from '../scenes/Home'
import Login from '../scenes/Login'
import App from "../App";
import Table from "../components/Table";
import Search from "../components/Search";

export const router = createBrowserRouter([
   {
      element: <App />,
      children: [
         {
            path: '/',
            element: <LandingPage />
         },
         {
            path: '/login',
            element: <Login />
         },
         {
            path: '/home',
            children: [
               {
                  index: true, 
                  element: <Home />
               }, 
               {
                  path: '/home/search',
                  element: <Search />
               },
               {
                  path: '/home/table',
                  element: <Table />
               }  
            ]
         }
      ]
   }
])