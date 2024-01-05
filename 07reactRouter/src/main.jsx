import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import User from './components/User/User.jsx'
import Github,{githubInfoLoader } from './components/Github/Github.jsx'

// create routeelement -  is a helper that creates route objects from <Route> elements. It's useful if you prefer to create your routes as JSX instead of objects.

const router = createBrowserRouter(
  createRoutesFromElements(
    // we have to notify the path and what element to load in that path
    //https://reactrouter.com/en/main/utils/create-routes-from-elements
  
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='User/' element={<User />} >
        <Route path=':userid' element={<User />} />
      </Route> 
      <Route loader={githubInfoLoader} path='Github' element={<Github />} />
      <Route path='*' element={<div>NOT FOUND</div>} />
    </Route> // path from the root is sandwiched in about - final patj - /about
    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  //   <App />
   // instead of loading the app we want to load the app from inside the layout as well
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
