import { useGetReporteExcelLazyQuery } from '../generated/graphql'

interface Props {
  pedidoId: number
}

export const useGetReporteExcel = () => {
  const [ReporteExcel, { data: reporteExcelData, loading: loadingReporteExcel }] = useGetReporteExcelLazyQuery()
  const getReporteExcel = async ({ pedidoId }: Props) => {
    try {
      await ReporteExcel({
        variables: {
          pedidoId
        }
      })
    } catch (error: any) {
      return { ok: false, error: error?.graphQLErrors[0]?.debugMessage }
    }
  }

  return {
    loadingReporteExcel,
    getReporteExcel,
    reporteExcelData
  }
}
