import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Box, Button, Container, Flex, Grid, Heading, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputFloat from '../../../components/input/inputFloat'
import InputImage from '../../../components/input/InputImage'
import Select from '../../../components/shared/Select'
// import { Imagen } from '../../../components/shared/ModalImages'
import useForm, { FormError } from '../../../hooks/useForm'
import useEventos from '../../../services/useEventos'
import useVendedoras from '../../../services/useVendedoras'
import { isContra } from '../../../utils/isContrseña'
// import useEventos, { ICrearEvento } from '../../../services/useEventos'
import { isEmpty } from '../../../utils/isEmpty'

export interface Imagen {
	id?: string | null | undefined
	titulo?: string | null | undefined
	url?: string | null | undefined
}

export interface ICrearVendedora {
	nombres: string
	apellidos: string
	celular: string
	email: string
	numeroDocumento: string
	password: string
	repeatPassword: string
}

const initialState = {
	nombres: '',
	apellidos: '',
	celular: '',
	email: '',
	numeroDocumento: '',
	password: '',
	repeatPassword: ''
}

const validation = ({
	nombres,
	apellidos,
	celular,
	email,
	numeroDocumento,
	password,
	repeatPassword
}: ICrearVendedora) => {
	const error: FormError<ICrearVendedora> = {}
	if (isEmpty(nombres)) {
		error.nombres = 'Este campo es obligatorio'
	}
	if (isEmpty(apellidos)) {
		error.apellidos = 'Este campo es obligatorio'
	}
	if (isEmpty(celular)) {
		error.celular = 'Este campo es obligatorio'
	}
	if (isEmpty(email)) {
		error.email = 'Este campo es obligatorio'
	}
	if (isEmpty(numeroDocumento)) {
		error.numeroDocumento = 'Este campo es obligatorio'
	}

	if (isEmpty(password)) {
		error.password = 'Este campo es obligatorio'
	}

	if (isEmpty(repeatPassword)) {
		error.repeatPassword = 'Este campo es obligatorio'
	}
	if (!isContra(password)) {
		error.password = 'Debe incluir al menos un dígito, una minúscula, una mayúscula y  un simbolo'
	}
	if (repeatPassword !== password) {
		error.repeatPassword = 'Las contraseñas deben coincidir'
	}

	return error
}

const dataDocumentos = [
	{ value: 'CE', label: 'CE', desc: 'CE' },
	{ value: 'DNI', label: 'DNI', desc: 'DNI' }
]

const CrearVendedora = () => {
	const navigate = useNavigate()
	const toast = useToast()
	const [innerValue, setInnerValue] = useState<string>('DNI')
	const { values, ...form } = useForm({
		initialValues: initialState,
		validate: validation
	})
	const { createVendededora } = useVendedoras()

	const handleSubmit = () => {
		const { repeatPassword, ...rest } = values
		createVendededora({ tipoDocumento: innerValue, ...rest }).then((res) => {
			if (res?.ok) {
				toast({
					title: 'Vendedor creado Correctamente',
					position: 'top-right',
					isClosable: true,
					status: 'success'
				})
				navigate('/vendedora')
			} else {
				console.log(res)
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
		<form onSubmit={form.onSubmit(handleSubmit)}>
			<Container maxWidth='1930px' p={'10'}>
				<Flex flexDir={'column'}>
					<Box maxWidth={'full'}>
						<Flex alignItems={'center'} columnGap={4}>
							<Flex
								justifyContent='center'
								alignItems='center'
								padding={1.5}
								bg='primary.500'
								rounded='full'
								cursor={'pointer'}
								onClick={() => navigate(-1)}
								_dark={{ bg: '#F0AC42', color: 'primary.500' }}>
								<ChevronLeftIcon color={'white'} />
							</Flex>
							<Heading as='h1' fontSize={22}>
								Crear Vendedora
							</Heading>
						</Flex>
					</Box>

					<Box maxWidth={'full'}>
						<Grid mt={5} templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }} gap={6}>
							<Select
								innerValue={innerValue!}
								setInnerValue={setInnerValue}
								selectOptions={dataDocumentos}
								label='Tipo Documento'
							/>
							<InputFloat
								type='text'
								label='Documennto'
								{...form.inputProps('numeroDocumento')}
								errorMessage={form.errors?.numeroDocumento}
							/>
							<InputFloat
								type='text'
								label='Nombres'
								{...form.inputProps('nombres')}
								errorMessage={form.errors?.nombres}
							/>
							<InputFloat
								type='text'
								label='Apellidos'
								{...form.inputProps('apellidos')}
								errorMessage={form.errors?.apellidos}
							/>
							<InputFloat
								type='text'
								label='Celular'
								{...form.inputProps('celular')}
								errorMessage={form.errors?.celular}
							/>
							<InputFloat
								type='text'
								label='Email'
								{...form.inputProps('email')}
								errorMessage={form.errors?.email}
							/>
							<InputFloat
								type='text'
								label='Contraseña'
								{...form.inputProps('password')}
								errorMessage={form.errors?.password}
							/>
							<InputFloat
								type='text'
								label='Repetir Contraseña'
								{...form.inputProps('repeatPassword')}
								errorMessage={form.errors?.repeatPassword}
							/>
						</Grid>
					</Box>
				</Flex>
				<Flex justifyContent='center' py={14}>
					<Button type='submit' w={96} py={7} colorScheme='primary' _dark={{ bg: '#F0AC42' }}>
						<Text fontWeight='bold' fontSize='xl'>
							Crear Vendedora
						</Text>
					</Button>
				</Flex>
			</Container>
		</form>
	)
}

export default CrearVendedora
