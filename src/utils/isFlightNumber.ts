export const isFlightNumber = (flightNumber?: string) => {
  const regFlightNumber = /^([A-Z]{2}|[A-Z]\d|\d[A-Z])[1-9](\d{1,3})?$/gm
  return regFlightNumber.test(flightNumber ?? '')
}
