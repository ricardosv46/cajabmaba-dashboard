import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useReducer
} from 'react'
import { User } from '../../generated/graphql'

import AuthReducer from './AuthReducer'

export interface Props {
  children: ReactElement
}

export interface AuthInitialState {
  user: User
  isAuth: boolean
  isLoading: boolean
}

export interface AuthContextValue extends AuthInitialState {
  logout: () => void
  login: (user: User) => void
}

export const initialState: AuthInitialState = {
  isAuth: false,
  isLoading: false,
  user: {} as User
}

const AuthContext = createContext<AuthContextValue>({} as AuthContextValue)

const AuthProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState)
  console.log(state)
  const login = async (payload: User) => dispatch({ type: 'login', payload })
  const logout = () => dispatch({ type: 'logout' })

  useEffect(() => {
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('user')
    if (token && user) {
      login(JSON.parse(user) as User)
    }
  }, [])
  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuthContext = () => useContext(AuthContext)
