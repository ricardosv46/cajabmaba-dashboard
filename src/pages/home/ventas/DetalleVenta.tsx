import { Box, Container, Flex, Heading, IconButton, Spinner, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Pagination from '../../../components/pagination'
import { IconEye } from '../../../icons/IconEye'
import IconEyeD from '../../../icons/IconEyeD'
import { useVentaId } from '../../../services/useVentaId'
import useVentas from '../../../services/useVentas'
import VentasPage from './VentasPage'

const DetalleVenta = () => {
	const { id } = useParams() as { id: string }

	const { venta, loading } = useVentaId({ ventaId: Number(id) })

	return (
		<Container maxWidth='1930px' p={'10'}>
			<Flex flexDir={'column'}>
				<Box maxWidth={'full'}>
					<Heading as='h1' fontSize={22}>
						Detalle Venta {venta.ventaId}
					</Heading>
					<Text color='blackAlpha.600' _dark={{ color: 'gray.400' }} fontSize='14px' mt={3}>
						Desde aquí podrás visualizar la información de todos la venta.
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
									<Th color='gray.400'>Codigo</Th>
									<Th color='gray.400'>Asiento</Th>
									<Th color='gray.400'>Tnedido</Th>
									<Th color='gray.400'>Evento</Th>
								</Tr>
							</Thead>
							<Tbody>
								{venta?.DetalleVenta?.map((item) => (
									<Tr key={item.detalleVentaId}>
										<Td>{item?.codigo}</Td>
										<Td>{item?.asiento}</Td>
										<Td>{item?.tendido}</Td>
										<Td>{item?.Evento?.titulo}</Td>
									</Tr>
								))}
							</Tbody>
						</Table>
					</TableContainer>
				)}
			</Flex>
		</Container>
	)
}

export default DetalleVenta
