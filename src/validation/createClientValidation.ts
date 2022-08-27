import { createCliente, Errors } from '../interfaces/client'
import { isDocument } from '../utils/isDocument'
import { isEmail } from '../utils/isEmail'
import { isEmpty } from '../utils/isEmpty'
import { isFlightNumber } from '../utils/isFlightNumber'

export const createClientValidation = ({
  nombreCongresista,
  apellidoCongresista,
  nroDocumentoCongresista,
  emailCongresista,
  paisCongresista,
  nroVueloLlegadaCongresista,
  nroVueloSalidaCongresista,
  horaLlegadaCongresista,
  horaSalidaCongresista,
  fechaLlegadaCongresista,
  fechaSalidaCongresista,
  hotelCongresista
}: createCliente) => {
  /* const errors: Record<string, string | boolean> & { ok: boolean } = {
    ok: true
  } */

  const errors: Errors = {
    nombreCongresista: '',
    apellidoCongresista: '',
    nroDocumentoCongresista: '',
    emailCongresista: '',
    paisCongresista: '',
    nroVueloLlegadaCongresista: '',
    nroVueloSalidaCongresista: '',
    horaLlegadaCongresista: '',
    horaSalidaCongresista: '',
    fechaLlegadaCongresista: '',
    fechaSalidaCongresista: '',
    hotelCongresista: '',
    ok: false
  }

  if (isEmpty(nombreCongresista)) {
    errors.ok = true
    errors.nombreCongresista = 'El campo es requerido'
  }

  if (isEmpty(apellidoCongresista)) {
    errors.ok = true
    errors.apellidoCongresista = 'El campo es requerido'
  }

  if (isEmpty(nroDocumentoCongresista)) {
    errors.ok = true
    errors.nroDocumentoCongresista = 'El campo es requerido'
  }

  if (!isDocument(nroDocumentoCongresista)) {
    errors.ok = true
    errors.nroDocumentoCongresista =
      'Se requiere 8 digitos para el nro de documento'
  }

  if (isEmpty(emailCongresista)) {
    errors.ok = true
    errors.emailCongresista = 'El campo es requerido'
  }

  if (!isEmail(emailCongresista)) {
    errors.ok = true
    errors.emailCongresista = 'El email no es valido'
  }

  if (isEmpty(paisCongresista)) {
    errors.ok = true
    errors.paisCongresista = 'El campo es requerido'
  }

  if (isEmpty(nroVueloLlegadaCongresista)) {
    errors.ok = true
    errors.nroVueloLlegadaCongresista = 'El campo es requerido'
  }

  if (isFlightNumber(nroVueloLlegadaCongresista)) {
    errors.ok = true
    errors.nroVueloLlegadaCongresista = 'El nro de vuelo no es valido'
  }

  if (isEmpty(nroVueloSalidaCongresista)) {
    errors.ok = true
    errors.nroVueloSalidaCongresista = 'El campo es requerido'
  }

  if (isFlightNumber(nroVueloSalidaCongresista)) {
    errors.ok = true
    errors.nroVueloSalidaCongresista = 'El nro de vuelo no es valido'
  }

  if (isEmpty(horaLlegadaCongresista)) {
    errors.ok = true
    errors.horaLlegadaCongresista = 'El campo es requerido'
  }

  if (isEmpty(horaSalidaCongresista)) {
    errors.ok = true
    errors.horaSalidaCongresista = 'El campo es requerido'
  }

  if (isEmpty(fechaLlegadaCongresista)) {
    errors.ok = true
    errors.fechaLlegadaCongresista = 'La fecha de llegada es requerida'
  }

  if (isEmpty(fechaSalidaCongresista)) {
    errors.ok = true
    errors.fechaSalidaCongresista = 'El campo es requerido'
  }

  if (isEmpty(hotelCongresista)) {
    errors.ok = true
    errors.hotelCongresista = 'El campo es requerido'
  }

  return errors
}
