import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Spinner
} from '@chakra-ui/react'
import { useState } from 'react'
import Pagination from '../../../components/pagination'

import useSuscriptores from '../../../services/useSuscriptores'

const Suscriptores = () => {
  const [state, setstate] = useState({
    pagina: 1,
    numeroPagina: 10
  })
  const { db: suscriptores, loading, nTotal } = useSuscriptores(state)
  const generatedTotal = (items: number, itemporpage: number) => {
    const n = Math.ceil(items / itemporpage)
    return Array(n)
      .fill(null)
      .map((_, i) => i + 1)
  }
  const paginas = generatedTotal(nTotal, state.numeroPagina)
  return (
    <Container maxWidth="1930px" p={'10'}>
      <Flex flexDir={'column'}>
        <Box maxWidth={'full'}>
          <Heading as="h1" fontSize={22}>
            suscriptores
          </Heading>
          <Text
            color="blackAlpha.600"
            _dark={{ color: 'gray.400' }}
            fontSize="14px"
            mt={3}
          >
            Desde aquí podrás visualizar la información de todos tus
            suscriptores.
          </Text>
        </Box>
        {loading ? (
          <Flex justifyContent="center" alignItems="center" h={'xl'}>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="primary.500"
              size="xl"
            />
          </Flex>
        ) : (
          <TableContainer mt={10}>
            <Table colorScheme="gray">
              <Thead fontWeight={'black'}>
                <Tr>
                  <Th color="gray.400">Nombres</Th>
                  <Th color="gray.400">Correo</Th>

                  {/* <Th textAlign="center" color="gray.400">
                    Detalles
                  </Th> */}
                </Tr>
              </Thead>
              <Tbody>
                {suscriptores.map((suscriptor) => (
                  <Tr key={suscriptor?.suscriptorId}>
                    <Td>{suscriptor?.nombres}</Td>
                    <Td>{suscriptor?.email}</Td>
                    {/* <Td>
                      <Flex justifyContent="center" alignItems="center" gap={5}>
                        <IconButton
                          aria-label="detalle"
                          onClick={() => {
                            navigate(
                              `/home/detalle-pedido/${pedido.pedidoId}}`,
                              {
                                state: pedido
                              }
                            )
                          }}
                        >
                          <IconEyeD />
                        </IconButton>
                      </Flex>
                    </Td> */}
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        )}

        <Pagination state={state} setstate={setstate} paginas={paginas} />
      </Flex>
    </Container>
  )
}

export default Suscriptores
