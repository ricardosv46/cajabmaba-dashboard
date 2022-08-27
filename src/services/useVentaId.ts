import { useGetVentaIdQuery } from '../generated/graphql'

export const useVentaId = (input = { ventaId: 0 }) => {
	const { data, loading, refetch } = useGetVentaIdQuery({
		fetchPolicy: 'network-only',
		variables: {
			...input
		}
	})

	const venta = data?.GetVentaId ?? {}

	return {
		loading,
		venta,
		refetch
	}
}
