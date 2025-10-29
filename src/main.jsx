import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'aos/dist/aos.css';

import { createBrowserRouter, RouterProvider } from "react-router";

let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)