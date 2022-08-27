import {
  InputMaybe,
  useGetAllPrecioReferencialQuery,
  useUpdatePrecioReferencialMutation
} from '../generated/graphql'

const usePreciosPreferencial = () => {
  const { data, loading, refetch } = useGetAllPrecioReferencialQuery({
    fetchPolicy: 'network-only'
  })
  const db = data?.GetAllPrecioReferencial ?? []

  // ACTUALIZAR PRECIO REFERENCIAL

  const [UpdatePrecioReferencialMutation] = useUpdatePrecioReferencialMutation()

  const updatePrecioReferencial = async (
    referenciaId: InputMaybe<string> | undefined,
    precio: number
  ) => {
    try {
      const res = await UpdatePrecioReferencialMutation({
        variables: {
          input: {
            referenciaId,
            precio
          }
        }
      })
      refetch()
      if (res.data?.UpdatePrecioReferencial) {
        return { ok: true }
      } else {
        return { ok: false, error: res.data?.UpdatePrecioReferencial }
      }
    } catch (error: any) {
      return { ok: false, error: 'Hubo un error' }
    }
  }
  return {
    db,
    loading,
    refetch,
    updatePrecioReferencial
  }
}

export default usePreciosPreferencial
