import { useCreateBloqueoAsientoAbonoMutation } from '../generated/graphql'

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

export const useBloqueoAsientoAbono = () => {
	const [CreateBloqueoAsiento, { loading }] = useCreateBloqueoAsientoAbonoMutation()
	const createBloqueoAsiento = async ({ input }: Input) => {
		try {
			const res = await CreateBloqueoAsiento({
				variables: {
					input: input
				}
			})
			if (res.data?.CreateBloqueoAsientoAbono) {
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
