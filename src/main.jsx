import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Employes from './Components/Emplyes/Employes.jsx';
import AddEmploye from './Components/AddEmploye/AddEmploye.jsx';
import UpdateEmploye from './Components/UpdateEmploye/Update.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Employes></Employes>
  },
  {
    path:"/add-employe/",
    element: <AddEmploye></AddEmploye>
  },
  {
    path: "/update-employe/:id",
    element: <UpdateEmploye></UpdateEmploye>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
