import { Navigate, Route, Routes } from 'react-router-dom'

import HomeRouter from './HomeRouter'
import AuthRouter from './AuthRouter'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import { useAuthContext } from '../store/auth/AuthState'

const RootRouter = () => {
  const { isAuth } = useAuthContext()

  return (
    <Routes>
      <Route
        path='/*'
        element={
          <PrivateRoute isAuth={isAuth}>
            <HomeRouter />
          </PrivateRoute>
        }
      />

      <Route
        path='auth/*'
        element={
          <PublicRoute isAuth={isAuth}>
            <AuthRouter />
          </PublicRoute>
        }
      />

      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}

export default RootRouter
