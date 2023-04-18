import { Route, Routes, Navigate } from "react-router-dom";
import { LoginPage, SigninPage } from '../pages';

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path='login' element={ <LoginPage/> }/>
        <Route path='signin' element={ <SigninPage/> }/>
        <Route path='/*' element={ <Navigate to='/auth/login'/> }/>
    </Routes>
  )
}
