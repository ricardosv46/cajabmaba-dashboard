import {
	useCreateVendedoraMutation,
	useGetAllVendedorasQuery,
	useUpdateEstadoVendedoraMutation,
	useUpdateVendedoraMutation
} from '../generated/graphql'

interface IEventos {
	feriaId: number
	estado?: string | null
}

export interface ICrearVendedora {
	nombres: string
	apellidos: string
	celular: string
	email: string
	numeroDocumento: string
	tipoDocumento: string
	password: string
}

export interface IUpdateVendedora {
	id: string
	nombres: string
	apellidos: string
	celular: string
	email: string
	numeroDocumento: string
	tipoDocumento: string
}

const useVendedoras = (input = { pagina: 1, numeroPagina: 10, estado: '' }) => {
	const { data, loading, refetch } = useGetAllVendedorasQuery({
		fetchPolicy: 'network-only',
		variables: {
			...input
		}
	})
	const db = data?.GetAllVendedoras?.data ?? []
	const nTotal = data?.GetAllVendedoras?.numeroTotal ?? 0
	//CREAR VENDEDORA
	const [CreateVendedora, { loading: loadingCreate }] = useCreateVendedoraMutation()

	const createVendededora = async ({
		nombres,
		apellidos,
		celular,
		email,
		numeroDocumento,
		tipoDocumento,
		password
	}: ICrearVendedora) => {
		try {
			const res = await CreateVendedora({
				variables: {
					input: {
						nombres,
						apellidos,
						celular,
						email,
						numeroDocumento,
						tipoDocumento,
						password
					}
				}
			})
			refetch()
			if (res.data?.CreateVendedora) {
				return { ok: true }
			}
		} catch (error: any) {
			return { ok: false, error: error?.graphQLErrors[0]?.debugMessage }
		}
	}

	// ACTUALIZAR VENDEDORA
	const [UpdateVendedoraMutation, { loading: loadingUpdate }] = useUpdateVendedoraMutation()

	const updateVendedora = async ({
		id,
		nombres,
		apellidos,
		celular,
		email,
		numeroDocumento,
		tipoDocumento
	}: IUpdateVendedora) => {
		try {
			const res = await UpdateVendedoraMutation({
				variables: {
					input: {
						id,
						nombres,
						apellidos,
						celular,
						email,
						numeroDocumento,
						tipoDocumento
					}
				}
			})
			refetch()
			if (res.data?.UpdateVendedora) {
				return { ok: true }
			}
		} catch (error: any) {
			return { ok: false, error: error?.graphQLErrors[0]?.debugMessage }
		}
	}

	// ACTUALIZAR ESTADO VENDEDORA

	const [UpdateEstadoVendedoraMutation] = useUpdateEstadoVendedoraMutation()

	const updateEstadoVendedora = async (id: number, estado: string) => {
		try {
			const res = await UpdateEstadoVendedoraMutation({
				variables: {
					input: {
						id,
						estado: estado === 'Activado' ? 'Desactivado' : 'Activado'
					}
				}
			})
			refetch()
			if (res.data?.UpdateEstadoVendedora) {
				return { ok: true }
			}
		} catch (error: any) {
			return { ok: false, error: error?.graphQLErrors[0]?.debugMessage }
		}
	}

	return {
		db,
		loading,
		refetch,
		updateEstadoVendedora,
		createVendededora,
		loadingCreate,
		updateVendedora,
		nTotal
	}
}

export default useVendedoras
