import { useCreateBloqueoAsientoMutation } from '../generated/graphql'

interface Props {
	tendido: string
	codigo: string
	asiento: string
	reservado: string
	feriaId: number
}

interface Input {
	input: Props[]
}

export const useBloqueoAsientoEvento = () => {
	const [CreateBloqueoAsiento, { loading }] = useCreateBloqueoAsientoMutation()
	const createBloqueoAsiento = async ({ input }: Input) => {
		try {
			const res = await CreateBloqueoAsiento({
				variables: {
					input: input
				}
			})
			if (res.data?.CreateBloqueoAsiento) {
				return { ok: true }
			}
		} catch (error: any) {
			return { ok: false, error: error?.graphQLErrors[0]?.debugMessage }
		}
	}
	return {
		createBloqueoAsiento,
		loading
	}
}
