import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


const Auth = () =>{
  let user= JSON.parse(sessionStorage.getItem('user'))

  return user
}

const ProtectedRoute = () => {
  const userAuth =Auth()

  return (
  
      userAuth? <Outlet /> : <Navigate to='/signup'/>
  
  )
}

export default ProtectedRoute