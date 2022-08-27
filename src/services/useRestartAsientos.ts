import { useRestartAsientosMutation } from '../generated/graphql'

export const useRestartAsientos = () => {
  const [RestartAsientos, { loading: loadingRestarAsientos }] = useRestartAsientosMutation()

  const restartAsientos = async () => {
    try {
      const res = await RestartAsientos({
        variables: {
          feriaId: 1
        }
      })
      if (res.data?.RestartAsientos) {
        return { ok: true, data: res.data?.RestartAsientos }
      }
    } catch (error: any) {
      return { ok: false, error: error?.graphQLErrors[0]?.debugMessage }
    }
  }

  return {
    loadingRestarAsientos,
    restartAsientos
  }
}
