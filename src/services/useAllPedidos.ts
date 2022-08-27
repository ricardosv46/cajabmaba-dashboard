import { useGetAllPedidosQuery } from '../generated/graphql'

interface Ipedidos {
  pagina: number
  numeroPagina: number
}

const useAllPedidos = ({ pagina, numeroPagina }: Ipedidos) => {
  const { data, loading, refetch } = useGetAllPedidosQuery({
    fetchPolicy: 'network-only',
    variables: {
      pagina,
      numeroPagina
    }
  })
  const db = data?.GetAllPedidos?.data ?? []
  const nTotal = data?.GetAllPedidos?.numeroTotal ?? 0
  return {
    db,
    loading,
    refetch,
    nTotal
  }
}

export default useAllPedidos
