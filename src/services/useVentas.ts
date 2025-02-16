import { useGetAllVentasQuery } from '../generated/graphql'

interface ICreate {
	input1: {}
	input2: {}
}

const useVentas = (input = { pagina: 1, numeroPagina: 10 }) => {
	const { data, loading, refetch } = useGetAllVentasQuery({
		fetchPolicy: 'network-only',
		variables: {
			...input
		}
	})
	const ventas = data?.GetAllVentas?.data ?? []
	const nTotal = data?.GetAllVentas?.numeroTotal ?? 0

	return {
		ventas,
		loading,
		refetch,
		nTotal
	}
}

export default useVentas
