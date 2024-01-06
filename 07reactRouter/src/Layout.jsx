import React from 'react'
import {Outlet} from 'react-router-dom' //In React Router, the Outlet component is used as a placeholder where child routes will be rendered. It's part of the declarative routing system provided by React Router.
import Header from './components/header/Header'
import Footer from './components/footer/Footer'



function Layout() {
  return (// the information in outlet will keep on changing for different routes, header and footer will remain the same
    <> 
        <Header />
          <Outlet />  
        <Footer />
    </>
  )
}

export default Layout
