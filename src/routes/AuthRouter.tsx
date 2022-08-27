import { Route, Routes } from 'react-router-dom'
import RecoveryPassword from '../pages/auth/RecoveryPassword'
import CreateAccount from '../pages/auth/CreateAccount'
import LoginPage from '../pages/auth/LoginPage'

const AuthRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='login' element={<LoginPage />} />
        <Route path='change-password' element={<RecoveryPassword />} />
        <Route path='create-account' element={<CreateAccount />} />
      </Routes>
    </div>
  )
}

export default AuthRouter
