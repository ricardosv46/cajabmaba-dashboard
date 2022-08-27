import { Box, Container, Flex, Heading, IconButton, Spinner, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Pagination from '../../../components/pagination'
import { IconEye } from '../../../icons/IconEye'
import IconEyeD from '../../../icons/IconEyeD'
import useVentas from '../../../services/useVentas'

const VentasPage = () => {
	const navigate = useNavigate()
	const [state, setstate] = useState({
		pagina: 1,
		numeroPagina: 10
	})
	const { ventas, loading, nTotal } = useVentas(state)

	const generatedTotal = (items: number, itemporpage: number) => {
		const n = Math.ceil(items / itemporpage)
		return Array(n)
			.fill(null)
			.map((_, i) => i + 1)
	}
	const paginas = generatedTotal(nTotal, state.numeroPagina)
	return (
		<Container maxWidth='1930px' p={'10'}>
			<Flex flexDir={'column'}>
				<Box maxWidth={'full'}>
					<Heading as='h1' fontSize={22}>
						Ventas
					</Heading>
					<Text color='blackAlpha.600' _dark={{ color: 'gray.400' }} fontSize='14px' mt={3}>
						Desde aquí podrás visualizar la información de todos las ventas.
					</Text>
				</Box>
				{loading ? (
					<Flex justifyContent='center' alignItems='center' h={'xl'}>
						<Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='primary.500' size='xl' />
					</Flex>
				) : (
					<TableContainer mt={10}>
						<Table colorScheme='gray'>
							<Thead fontWeight={'black'}>
								<Tr>
									<Th color='gray.400'>Tipo Documento </Th>
									<Th color='gray.400'>Documento</Th>
									<Th color='gray.400'>Celular</Th>
									<Th color='gray.400'>Email</Th>
									<Th color='gray.400'>Fecha Venta</Th>
									<Th color='gray.400'>Tipo Pago</Th>
									<Th color='gray.400'>Nombres o Razón social </Th>
								</Tr>
							</Thead>
							<Tbody>
								{ventas.map((venta) => (
									<Tr key={venta.ventaId}>
										<Td>{venta?.tipoComprobante}</Td>
										<Td>{venta?.numeroComprobante}</Td>
										<Td>{venta?.celular}</Td>
										<Td>{venta?.email}</Td>
										<Td>{venta?.fechaVenta}</Td>
										<Td>{venta?.tipoVenta}</Td>
										<Td>{venta?.razonSocial}</Td>
										<Td>
											<Flex justifyContent='center' alignItems='center' gap={5}>
												<IconButton
													aria-label='detalle'
													onClick={() => {
														navigate(`${venta.ventaId}`, {
															state: venta
														})
													}}>
													<IconEyeD />
												</IconButton>
											</Flex>
										</Td>
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

export default VentasPage
