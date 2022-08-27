import { ChevronLeftIcon, ViewIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Input,
  InputGroup,
  InputRightElement,
  Text
} from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import WarningIcon from '../../../assets/icons/WarningIcon'
import InputFloat from '../../../components/input/inputFloat'
import useForm from '../../../hooks/useFormOld'

interface IProps {
  setShowNext: (showNext: boolean) => void
}
const Register = ({ setShowNext }: IProps) => {
  const navigate = useNavigate()
  const { nombre, apellidos, telefono, correoElectronico, password, onChange } =
    useForm({
      nombre: '',
      apellidos: '',
      telefono: '',
      correoElectronico: '',
      password: ''
    })

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  return (
    <Container
      maxWidth="1930px"
      height={'100%'}
      pb={{ base: '10', lg: '0' }}
      pt={{ base: '5', lg: '16' }}
      px={{ base: '8', lg: '16' }}
    >
      <Flex alignItems={'center'} gap={4} pb={5}>
        <Flex
          justifyContent="center"
          alignItems="center"
          padding={1.5}
          bg="primary.500"
          rounded="full"
          cursor={'pointer'}
          onClick={() => navigate(-1)}
        >
          <ChevronLeftIcon color={'white'} />
        </Flex>
        <Text>Regresar</Text>
      </Flex>
      <Text fontSize={{ base: '2xl', lg: '3xl' }} pt={5} fontWeight="bold">
        Registrar Administrador
      </Text>
      <Flex gap={5} bg={'gray.200'} p={5} rounded={'md'} mt={7}>
        <Box w={'18px'} mt={1}>
          <WarningIcon width={18} height={18} />
        </Box>

        <Text _dark={{ color: 'gray.700' }}>
          <Text as={'span'} fontWeight="bold" mr={1}>
            Importante:
          </Text>
          el usuario administrador debe poseer perfil de administrador en SII
          para la empresa que será registrada.
        </Text>
      </Flex>
      <Text mt={5}>Información personal del administrador</Text>
      <Grid
        mt={5}
        templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }}
        gap={6}
      >
        <InputFloat
          type="text"
          label="Nombre"
          name="nombre"
          value={nombre}
          onChange={onChange}
        />
        <InputFloat
          type="text"
          label="Apellidos"
          name="apellidos"
          value={apellidos}
          onChange={onChange}
        />
        <InputFloat
          type="num"
          label="Telefono"
          name="telefono"
          value={telefono}
          onChange={onChange}
        />
        <InputFloat
          type="email"
          label="Correo Electrónico"
          name="correoElectronico"
          value={correoElectronico}
          onChange={onChange}
        />
      </Grid>
      <Text mt={10}>Crear contraseña</Text>
      <Grid
        mt={5}
        templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }}
        gap={6}
      >
        <InputFloat
          type="password"
          label="Password"
          name="password"
          value={password}
          onChange={onChange}
        />
      </Grid>
      <Text mt={10}>
        Al continuar estás aceptando nuestros
        <Text as={'span'} color="primary.500" ml={1}>
          Términos y condiciones y Políticas de privacidad
        </Text>
      </Text>
      <Grid
        mt={5}
        templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }}
        gap={6}
      >
        <Box></Box>
        <Flex justifyContent="end">
          <Button
            type="submit"
            colorScheme="primary"
            w={{ base: 'full', md: 96 }}
            py={7}
            onClick={() => setShowNext(true)}
          >
            <Text fontSize="xl" fontWeight="bold">
              Continuar
            </Text>
          </Button>
        </Flex>
        {/* <Button colorScheme={'primary'} onClick={() => setShowNext(true)}>
          <Text fontSize={{ base: 'md', lg: 'lg' }}>Continuar</Text>
        </Button> */}
      </Grid>
    </Container>
  )
}

export default Register
