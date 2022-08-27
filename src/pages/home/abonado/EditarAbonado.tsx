import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Box, Button, Container, Flex, Grid, Heading, Text, useToast } from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'
import InputFloat from '../../../components/input/inputFloat'
// import useForm from '../../../hooks/useForm'
import useFeria from '../../../services/useFeria'
import useForm from '../../../hooks/useForm'
import InputImage from '../../../components/input/InputImage'
import { useEffect, useState } from 'react'
// import { useState } from 'react'
// import { Imagen } from '../../../components/shared/ModalImages'

export interface Imagen {
	id?: string | null | undefined
	titulo?: string | null | undefined
	url?: string | null | undefined
}

export interface IUpdateFeria {
	feriaId: string
	titulo: string
	descripcionCorta: string
	descripcionLarga: string
	terminosCondiciones: string
	fecha: string
	hora: string
	fechaInicial: string
	horaInicial: string
	fechaFinal: string
	horaFinal: string
	descuento: number
}

const initialState: IUpdateFeria = {
	descuento: 0,
	descripcionCorta: '',
	descripcionLarga: '',
	fecha: '',
	fechaFinal: '',
	fechaInicial: '',
	hora: '',
	horaFinal: '',
	horaInicial: '',
	terminosCondiciones: '',
	titulo: '',
	feriaId: ''
}
const EditarAbonado = () => {
	const { state: detalle } = useLocation() as any
	const { updateFeria } = useFeria()
	const [imagenPrincipal, setImagenPrincipal] = useState<Imagen>({})
	const [imagenSecundaria, setImagenSecundaria] = useState<Imagen>({})
	const navigate = useNavigate()
	console.log({ detalle })
	const toast = useToast()
	console.log(imagenPrincipal)
	initialState.titulo = detalle.abonados.titulo
	initialState.descuento = detalle.abonados.descuento
	initialState.descripcionCorta = detalle.abonados.descripcionCorta
	initialState.descripcionLarga = detalle.abonados.descripcionLarga
	initialState.fecha = detalle.abonados.fecha
	initialState.fechaFinal = detalle.abonados.fechaFinal
	initialState.fechaInicial = detalle.abonados.fechaInicial
	initialState.hora = detalle.abonados.hora
	initialState.horaFinal = detalle.abonados.horaFinal
	initialState.horaInicial = detalle.abonados.horaInicial
	initialState.terminosCondiciones = detalle.abonados.terminosCondiciones
	initialState.feriaId = detalle.abonados.feriaId
	// initialState.imagenPrincipal = detalle.imagenPrincipal
	// initialState.imagenSecundaria = detalle.abonados.imagenSecundaria
	// console.log(imagenPrincipal)
	const { values, ...form } = useForm({
		initialValues: initialState
		// validate: validacion
	})

	const handleSubmit = async () => {
		const { ...rest } = values
		// rest.imagenPrincipal = values.imagenPrincipal?.id
		updateFeria({
			...rest,
			imagenPrincipal: Number(imagenPrincipal.id),
			imagenSecundaria: Number(imagenSecundaria.id)
		}).then((res) => {
			if (res?.ok) {
				toast({
					title: 'Abonado Actualizado Correctamente',
					position: 'top-right',
					isClosable: true,
					status: 'success'
				})
			} else {
				toast({
					title: 'Abonado Actualizado Inrrectamente',
					position: 'top-right',
					isClosable: true,
					status: 'error'
				})
			}
			navigate(-1)
		})
	}
	useEffect(() => {
		if (detalle) {
			setImagenPrincipal({
				id: detalle.abonados.imagenPrincipal.id ?? '',
				url: detalle.abonados.imagenPrincipal.url ?? '',
				titulo: detalle.abonados.imagenPrincipal.titulo ?? ''
			})
			setImagenSecundaria({
				id: detalle.abonados.imagenSecundaria.id ?? '',
				url: detalle.abonados.imagenSecundaria.url ?? '',
				titulo: detalle.abonados.imagenSecundaria.titulo ?? ''
			})
		}
	}, [detalle])

	return (
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
							_dark={{ bg: '#F0AC42', color: 'primary.500' }}
							onClick={() => navigate(-1)}>
							<ChevronLeftIcon color={'white'} />
						</Flex>
						<Heading as='h1' fontSize={22}>
							Actualizar Abonado
						</Heading>
					</Flex>
				</Box>

				<Box maxWidth={'full'}>
					{/* <Grid mt={5} templateColumns={{ base: 'repeat(1, 1fr)' }} gap={6}>
            <InputFloat
              type="text"
              label="Titulo"
              {...form.inputProps('titulo')}
            />
          </Grid> */}
					<Grid mt={5} templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }} gap={6}>
						<InputFloat
							type='text'
							label='Titulo'
							{...form.inputProps('titulo')}
							// {...form.inputProps('titulo')}
						/>
						<InputFloat
							type='text'
							label='Descuento (%)'
							{...form.inputProps('descuento')}
							pattern='[0-9]{0,3}'
							onChange={(e) => {
								e.target.validity.valid && form.setField('descuento', e.target.value)
							}}
						/>
						<InputFloat type='date' label='Fecha' {...form.inputProps('fecha')} />
						<InputFloat type='time' label='Hora' {...form.inputProps('hora')} />
						<InputFloat type='date' label='Fecha Inicial' {...form.inputProps('fechaInicial')} />
						<InputFloat type='date' label='Fecha Final' {...form.inputProps('fechaFinal')} />
						<InputFloat type='time' label='Hora Inicial' {...form.inputProps('horaInicial')} />
						<InputFloat type='time' label='Hora Final' {...form.inputProps('horaFinal')} />
					</Grid>
					<Grid mt={5} templateColumns={{ base: 'repeat(1, 1fr)' }} gap={6}>
						<InputFloat type='text' label='Descripción Corta' {...form.inputProps('descripcionCorta')} h='150px' />
						<InputFloat type='text' label='Descripción Larga' {...form.inputProps('descripcionLarga')} h='150px' />
						<InputFloat type='text' label='Terminos Condiciones' {...form.inputProps('terminosCondiciones')} h='200px' />
					</Grid>
					<Grid mt={5} templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }} gap={6}>
						<InputImage label=' Imagen Principal' onChange={(img) => setImagenPrincipal(img)} value={imagenPrincipal} />
						<InputImage label=' Imagen Secundaria' onChange={(img) => setImagenSecundaria(img)} value={imagenSecundaria} />
					</Grid>
				</Box>
			</Flex>
			<Flex justifyContent='center' py={14}>
				<Button type='button' w={96} py={7} colorScheme='primary' onClick={handleSubmit} _dark={{ bg: '#F0AC42' }}>
					<Text fontWeight='bold' fontSize='xl'>
						Actualizar Abonado
					</Text>
				</Button>
			</Flex>
		</Container>
	)
}

export default EditarAbonado
