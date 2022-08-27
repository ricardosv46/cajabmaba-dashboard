import { isEmail } from '../utils/isEmail'
import { isEmpty } from '../utils/isEmpty'

export interface login {
  email: string
  password: string
}
export interface Errors {
  email: string
  password: string
  ok: boolean
}

export const loginValidation = ({ email, password }: login) => {
  const errors: Errors = {
    email: '',
    password: '',

    ok: false
  }

  if (isEmpty(email)) {
    errors.ok = true
    errors.email = 'El campo es requerido'
  }

  if (!isEmail(email)) {
    errors.ok = true
    errors.email = 'El email no es valido'
  }

  if (isEmpty(password)) {
    errors.ok = true
    errors.password = 'El campo es requerido'
  }

  return errors
}
