import { ChevronLeftIcon } from '@chakra-ui/icons'
import {
  Box,
  Container,
  Flex,
  Heading,
  Table,
  TableContainer,
  Text,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button,
  Link
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useGetReporteExcel } from '../../../services/useGetReporteExcel'

const DetallePedido = () => {
  const { state: detalle } = useLocation() as any
  const { getReporteExcel, reporteExcelData, loadingReporteExcel } = useGetReporteExcel()
  const [reporteExcelUrl, setReporteExcelUrl] = useState('')
  const navigation = useNavigate()
  // console.log(detalle)

  useEffect(() => {
    getReporteExcel({ pedidoId: detalle.pedidoId })
    setReporteExcelUrl(reporteExcelData?.GetReporteExcel!)
  }, [loadingReporteExcel])

  return (
    <Container maxWidth="1930px" p={'10'}>
      <Flex flexDir={'column'}>
        <Box maxWidth={'full'}>
          <Flex alignItems={'center'} columnGap={4}>
            <Flex
              justifyContent="center"
              alignItems="center"
              padding={1.5}
              bg="primary.500"
              rounded="full"
              cursor={'pointer'}
              onClick={() => navigation(-1)}
            >
              <ChevronLeftIcon color={'white'} />
            </Flex>
            <Heading as="h1" fontSize={22}>
              Detalle del pedido {detalle?.pedidoId}
            </Heading>
          </Flex>
        </Box>

        <Box maxWidth={'full'}>
          <>
            <Box p={'20px'} rounded={'2xl'} shadow={'xl'}>
              <Flex pt={2} pb={3} direction="row" justifyContent="center">
                <Text fontSize="lg" color={'gray.500'}>
                  RESÚMEN DE PEDIDO
                </Text>{' '}
              </Flex>

              <Flex
                py={5}
                borderColor="gray.200"
                borderTopWidth={0.8}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Text fontSize="lg" color={'gray.500'}>
                  Usuario
                </Text>
                <Text color="black" fontWeight={'normal'} fontSize="xl">
                  {detalle.Usuario.nombres} {detalle.Usuario.nombres}
                </Text>
              </Flex>
              <Flex
                py={5}
                borderColor="gray.200"
                borderTopWidth={0.8}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Text fontSize="lg" color={'gray.500'}>
                  Fecha de Pedido
                </Text>
                <Text color="black" fontWeight={'normal'} fontSize="xl">
                  {detalle.fechaPedido}
                </Text>
              </Flex>

              <Flex
                py={5}
                borderColor="gray.200"
                borderTopWidth={0.8}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Text fontSize="lg" color={'gray.500'}>
                  Precio Total
                </Text>
                <Text color="black" fontWeight={'normal'} fontSize="xl">
                  S/ {detalle.precioTotal}
                </Text>
              </Flex>
              <Flex
                py={5}
                borderColor="gray.200"
                borderTopWidth={0.8}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Text fontSize="lg" color={'gray.500'}>
                  Numero de Comprobante
                </Text>
                <Text color="black" fontWeight={'normal'} fontSize="xl">
                  {detalle.numeroComprobante}
                </Text>
              </Flex>
              <Flex
                py={5}
                borderColor="gray.200"
                borderTopWidth={0.8}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Text fontSize="lg" color={'gray.500'}>
                  Tipo de Comprobante
                </Text>
                <Text color="black" fontWeight={'normal'} fontSize="xl">
                  {detalle.tipoComprobante}
                </Text>
              </Flex>
              {detalle.tipoComprobante === 'Factura' && (
                <Flex
                  py={5}
                  borderColor="gray.200"
                  borderTopWidth={0.8}
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontSize="lg" color={'gray.500'}>
                    Razon Social
                  </Text>
                  <Text color="black" fontWeight={'normal'} fontSize="xl">
                    {detalle.razonSocial}
                  </Text>
                </Flex>
              )}
              <Flex
                py={5}
                borderColor="gray.200"
                borderTopWidth={0.8}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Text fontSize="lg" color={'gray.500'}>
                  Descargar reporte
                </Text>
                <Link
                  href={reporteExcelUrl}
                  download
                >
                  <Button
                    colorScheme={'green'}
                    type='button'
                    fontWeight={'normal'}
                    fontSize="xl"
                    px={6}
                    disabled={loadingReporteExcel}
                  >
                    <Text>Descargar</Text>
                  </Button>
                </Link>
              </Flex>
            </Box>
          </>
          {/* )} */}
        </Box>
      </Flex>
      <TableContainer mt={10} shadow={'xl'}>
        <Table colorScheme="gray">
          <Thead fontWeight={'black'}>
            <Tr>
              <Th color="gray.400">Codigo</Th>
              <Th color="gray.400">Asiento</Th>
              <Th color="gray.400">Precio</Th>
            </Tr>
          </Thead>
          <Tbody>
            {detalle.DetallePedido.map(
              (pedido: {
                codigo: string
                asiento: string
                precio: number
                detallePedidoId: string
              }) => (
                <Tr key={pedido.detallePedidoId}>
                  <Td>{pedido.codigo}</Td>
                  <Td>{pedido.asiento}</Td>
                  <Td>{pedido.precio}</Td>
                </Tr>
              )
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default DetallePedido
