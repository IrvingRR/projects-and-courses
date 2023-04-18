import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../auth/pages';
import { HeroesRoutes } from '../heroes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* Private routes */}
        <Route path='login' element={
          <PublicRoute>
            <LoginPage/>
          </PublicRoute>
        }/>

        {/* Public routes */}
        <Route path='/*' element={
          <PrivateRoute>
            <HeroesRoutes/>
          </PrivateRoute>
        }/>
      </Routes>
    </>
  )
}