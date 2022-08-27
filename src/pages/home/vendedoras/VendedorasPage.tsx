import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'
import {
	Box,
	Container,
	Flex,
	Heading,
	Text,
	Button,
	TableContainer,
	Table,
	Thead,
	Tr,
	Th,
	Tbody,
	Td,
	IconButton,
	Switch,
	Spinner,
	useToast
} from '@chakra-ui/react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import InputFloat from '../../../components/input/inputFloat'
import ModalContraseña from '../../../components/modal/ModalContraseña'
import Pagination from '../../../components/pagination'
import useForm, { FormError } from '../../../hooks/useForm'
import useToggle from '../../../hooks/useToggle'
import { useUpdatePassword } from '../../../services/useUpdatePassword'
import useVendedoras from '../../../services/useVendedoras'
import { isContra } from '../../../utils/isContrseña'
import { isEmpty } from '../../../utils/isEmpty'

const initialState = {
	id: '',
	passwordNuevo: '',
	repeatPassword: '',
	passwordAntiguo: ''
}

interface INewPassword {
	passwordNuevo: string
	repeatPassword: string
	passwordAntiguo: string
}

const validation = ({ passwordNuevo, repeatPassword, passwordAntiguo }: INewPassword) => {
	const error: FormError<INewPassword> = {}

	if (isEmpty(passwordAntiguo)) {
		error.passwordAntiguo = 'Este campo es obligatorio'
	}

	if (isEmpty(passwordNuevo)) {
		error.passwordNuevo = 'Este campo es obligatorio'
	}

	if (isEmpty(repeatPassword)) {
		error.repeatPassword = 'Este campo es obligatorio'
	}
	if (!isContra(passwordNuevo)) {
		error.passwordNuevo = 'Debe incluir al menos un dígito, una minúscula, una mayúscula y  un simbolo'
	}
	if (repeatPassword !== passwordNuevo) {
		error.repeatPassword = 'Las contraseñas deben coincidir'
	}

	return error
}

const VendedorasPage = () => {
	const navigate = useNavigate()
	const [state, setstate] = useState({
		pagina: 1,
		numeroPagina: 10
	})
	const { updatePassword, loadingUpdatePassword } = useUpdatePassword()

	const {
		db: vendedoras,
		loading,
		updateEstadoVendedora,
		nTotal
	} = useVendedoras({ numeroPagina: state?.numeroPagina, pagina: state?.pagina, estado: '' })
	const { isOpen, onOpen, onClose } = useToggle()
	const { values, clear, errors, setErrors, ...form } = useForm({
		initialValues: initialState,
		validate: validation
	})

	const generatedTotal = (items: number, itemporpage: number) => {
		const n = Math.ceil(items / itemporpage)
		return Array(n)
			.fill(null)
			.map((_, i) => i + 1)
	}
	const paginas = generatedTotal(nTotal, state.numeroPagina)
	const toast = useToast()

	const handleUpdateEstado = async (id: number, estado: string) => {
		updateEstadoVendedora(id, estado).then((res) => {
			if (res?.ok) {
				toast({
					title: 'Estado Actualizado Correctamente',
					position: 'top-right',
					isClosable: true,
					status: 'success'
				})
			} else {
				toast({
					title: 'Hubo un error',
					position: 'top-right',
					isClosable: true,
					status: 'error'
				})
			}
		})
	}

	const handleSubmit = () => {
		const { repeatPassword, ...rest } = values
		updatePassword({ ...rest }).then((res) => {
			if (res?.ok) {
				toast({
					title: 'Password actualizado Correctamente',
					position: 'top-right',
					isClosable: true,
					status: 'success'
				})
				clear()
				onClose()
				setErrors({})
			} else {
				toast({
					title: res?.error,
					position: 'top-right',
					isClosable: true,
					status: 'error'
				})
			}
		})
	}

	return (
		<Container maxWidth='1930px' p={'10'}>
			<Flex flexDir={'column'}>
				<Box maxWidth={'full'}>
					<Heading as='h1' fontSize={22}>
						Vendedores
					</Heading>
					<Text color='blackAlpha.600' _dark={{ color: 'gray.400' }} fontSize='14px' mt={3}>
						Desde aquí podrás visualizar la información de todos los vendedores.
					</Text>
				</Box>
				<Flex justifyContent='flex-end' alignItems='center' mt={5}>
					<Button
						colorScheme='primary'
						_dark={{ bg: '#F0AC42' }}
						variant='solid'
						leftIcon={<AddIcon />}
						onClick={() => navigate('/crear-vendedora')}>
						<Text lineHeight={0}>Crear Vendedor</Text>
					</Button>
				</Flex>
				{loading ? (
					<Flex justifyContent='center' alignItems='center' h={'xl'}>
						<Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='primary.500' size='xl' />
					</Flex>
				) : (
					<TableContainer mt={10}>
						<Table colorScheme='gray'>
							<Thead fontWeight={'black'}>
								<Tr>
									<Th color='gray.400'>Nombres</Th>
									<Th color='gray.400'>Apellidos</Th>
									<Th color='gray.400'>Tipo Documento</Th>
									<Th color='gray.400'>Documento</Th>
									<Th color='gray.400'>Estado</Th>
									<Th color='gray.400'>Email</Th>
									<Th color='gray.400'>Celular</Th>
									<Th color='gray.400'>Acciones</Th>
								</Tr>
							</Thead>
							<Tbody>
								{vendedoras.map((vendedora) => (
									<Tr key={vendedora?.id}>
										<Td>{vendedora?.nombres}</Td>
										<Td>{vendedora?.apellidos}</Td>
										<Td>{vendedora?.tipoDocumento}</Td>
										<Td>{vendedora?.numeroDocumento}</Td>
										<Td>
											<Switch
												borderColor='transparent'
												colorScheme='primary'
												size='lg'
												isChecked={vendedora?.estado === 'Activado'}
												onChange={() => handleUpdateEstado(Number(vendedora?.id), vendedora?.estado!)}
											/>
										</Td>
										<Td>{vendedora?.email}</Td>
										<Td>{vendedora?.celular}</Td>
										<Td>
											<Flex justifyContent='center' alignItems='center' gap={5}>
												<IconButton
													aria-label='editar'
													onClick={() => {
														{
															navigate(`/editar-vendedora/${vendedora?.id}`, {
																state: { vendedora }
															})
														}
													}}>
													<EditIcon w={5} h={5} />
												</IconButton>
												{/* <Button
													aria-label='editar'
													onClick={() => {
														onOpen()
														values.id = vendedora?.id!
													}}>
													<EditIcon w={5} h={5} />
													<Text ml={3}>Password</Text>
												</Button> */}
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

			{/* <ModalContraseña
				isOpen={isOpen}
				onClose={() => {
					onClose()
					clear()
					setErrors({})
				}}
				header='Cambiar contraseña'
				onClick={form.onSubmit(handleSubmit)}>
				<Box>
					<InputFloat
						type='text'
						label='Contraseña Antigua'
						{...form.inputProps('passwordAntiguo')}
						errorMessage={errors?.passwordAntiguo}
					/>
					<Text my={4}>Ingresa su nueva contraseña:</Text>
					<Flex flexDir='column' gap={5}>
						<InputFloat
							type='text'
							label='Contraseña'
							{...form.inputProps('passwordNuevo')}
							errorMessage={errors?.passwordNuevo}
						/>
						<InputFloat
							type='text'
							label='Repetir Contraseña'
							{...form.inputProps('repeatPassword')}
							errorMessage={errors?.repeatPassword}
						/>
					</Flex>
				</Box>
			</ModalContraseña> */}
		</Container>
	)
}

export default VendedorasPage
