export const isDocument = (document?: string) => {
  const regDocument = /^[0-9]{8}$/
  return regDocument.test(document ?? '')
}
