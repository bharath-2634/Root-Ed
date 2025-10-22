import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

const CheckAuth = ({ isAuthenticated, user, children }) => {


    const location = useLocation();

    if(location.pathname==="/") {
       if(isAuthenticated) {
        if(user?.role==="Admin") {
          return <Navigate to="/admin/dashboard"/>
        }
        if(user?.role === "Student") {
          return <Navigate to="/main/home"/>
        }
        // for tutors
       }else {
          return <Navigate to="/main/home"/>
       }
    }

    // if(isAuthenticated && (location.pathname.includes("/register"))) {
    //   return <Navigate to="/auth/getStarted"/>
    // }

    
      if(isAuthenticated && (location.pathname.includes("/register"))) {
          if(user?.role==="Admin") {
            return <Navigate to="/admin/dashboard"/>
          }
          if(user?.role === "Student") {
            return <Navigate to="/main/home"/>
          }
      }
      

      if (
        isAuthenticated &&
        (location.pathname.includes("/login") ||
          location.pathname.includes("/register"))
      ) {
          if(user?.role==="Admin") {
            return <Navigate to="/admin/dashboard"/>
          }
          if(user?.role === "Student") {
            return <Navigate to="/main/home"/>
          }
      }

      
  return <>{children}</>
}

export default CheckAuth;