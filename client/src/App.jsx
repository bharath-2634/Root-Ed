import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import HomeLayout from './components/home-view/layout'
import AuthLayout from './components/auth-view/layout'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import { useDispatch, useSelector } from 'react-redux'
import { checkAuth } from './store/auth-slice'
import { useEffect } from 'react'
import CheckAuth from './components/common/checkAuth';
import GetStarted from './pages/auth/getStarted'


const App = () => {

  const { user, isAuthenticated, isLoading }  = useSelector((state)=>state.auth);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(checkAuth());
  },[dispatch]);

  if (isLoading) console.log("loading");

  console.log("user",user);

  return (
    <div className='flex flex-col overflow-hidden bg-primary'>
      <Routes>
        <Route
            path="/"
            element={
              <CheckAuth
                isAuthenticated={isAuthenticated}
                user={user}
              ></CheckAuth>
            }
          />
          <Route path='/auth' 
                element={<CheckAuth isAuthenticated={isAuthenticated} user={user}>
                            <AuthLayout/>
                          </CheckAuth>}>
              <Route path="login" element={<Login/>}/>
              <Route path='register' element={<Register/>}/>
              <Route path='getStarted' element={<GetStarted/>}/>
          </Route>
          <Route path="/main" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}>
                            <HomeLayout/>
                          </CheckAuth>}>
              <Route path='home' element={<Home/>}/>
          </Route>
      </Routes>
    </div>
  )
}

export default App
