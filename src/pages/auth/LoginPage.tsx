import {
  Box,
  Flex,
  Link,
  Text,
  Image,
  Button,
  Heading,
  Checkbox,
  useToast
} from '@chakra-ui/react'
import { FormEvent, useState, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import ImgLogin from '../../assets/imgs/login.png'
import InputFloat from '../../components/input/inputFloat'
import useForm from '../../hooks/useFormOld'
import { IconLogo } from '../../icons'
import { useLogin } from '../../services/useLogin'
import { useAuthContext } from '../../store/auth/AuthState'
import { Errors, loginValidation } from '../../validation/loginValidation'

const LoginPage = () => {
  const { login } = useAuthContext()
  const [errorMessage, setErrorMessage] = useState<Errors | undefined>()
  const toast = useToast()
  const [isDisable, setIsDisable] = useState(false)
  const { loginUsuario, loadingLogin } = useLogin()
  const { password, email, onChange } = useForm({
    dni: '',
    email: '',
    password: ''
  })

  const handleSubmit = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault()

    const errors = loginValidation({
      email,
      password
    })
    setErrorMessage(errors)
    if (errors.ok || loadingLogin) {
      setIsDisable(true)
    } else {
      setIsDisable(false)
    }
    if (!errors.ok) {
      loginUsuario({
        email,
        password
      }).then((res) => {
        if (res?.ok) {
          login(res?.data!)
        } else {
          toast({
            title: 'Email o Password incorrecto, vuelva a intentarlo',
            position: 'top-right',
            isClosable: true,
            status: 'error'
          })
        }
      })
    }
  }

  useEffect(() => {
    if (errorMessage) {
      const errors = loginValidation({
        email,
        password
      })
      setErrorMessage(errors)
      if (errors.ok || loadingLogin) {
        setIsDisable(true)
      } else {
        setIsDisable(false)
      }
    }
  }, [email, password])

  return (
    <Flex w="100%" justifyContent="space-between" h="100vh">
      <Flex
        pt={{ base: 16, md: 0 }}
        flex={1}
        h="full"
        justifyContent="center"
        alignItems={{ md: 'center' }}
      >
        <Box width={{ base: '90%', md: 96 }}>
          <Box pb={4}>
            <IconLogo />
          </Box>

          <Text fontSize={{ base: '2xl', lg: '4xl' }} fontWeight="bold">
            Inicia sesión
          </Text>
          {/* <Text color="primary.500" pt={5} fontWeight="semibold">
            Si eres nuevo por aquí regístrate ahora{' '}
            <Link as={RouterLink} color="primary.700" to="/auth/create-account">
              Crear cuenta
            </Link>
          </Text> */}

          <Flex
            py={10}
            gap={10}
            as="form"
            autoComplete="none"
            flexDirection="column"
            onSubmit={handleSubmit}
          >
            <InputFloat
              type="email"
              label="Email"
              name="email"
              value={email}
              onChange={onChange}
              errorMessage={errorMessage?.email}
            />

            <InputFloat
              type="password"
              label="Password"
              name="password"
              value={password}
              onChange={onChange}
              errorMessage={errorMessage?.password}
            />

            <Button
              disabled={isDisable}
              py={7}
              w="full"
              fontSize="xl"
              type="submit"
              fontWeight="bold"
              colorScheme="primary"
            >
              Iniciar sesión
            </Button>
          </Flex>

          <Flex py={7} justifyContent="space-between">
            <Checkbox top={0} colorScheme="primary">
              Recordarme
            </Checkbox>

            {/* <Link as={RouterLink} to="/auth/change-password">
              Recuperar contraseña
            </Link> */}
          </Flex>
        </Box>
      </Flex>
      <Box
        flex={1}
        h="full"
        overflow="hidden"
        position="relative"
        display={{ base: 'none', md: 'block' }}
      >
        <Image
          w="full"
          h="full"
          inset={0}
          src={ImgLogin}
          pos="absolute"
          objectFit="cover"
        />

        <Box bg="#0E1C3A" pos="absolute" opacity="0.7" inset={0} />

        <Flex
          w="full"
          h="full"
          p={20}
          align="start"
          flexDir="column"
          justify="center"
          position="relative"
        >
          <Heading as="h2" fontSize="6xl" color="white">
            Panel Administrativo
          </Heading>
          <Heading as="h2" fontSize="6xl" color="primary.500">
            La Esperanza
          </Heading>
        </Flex>
      </Box>
    </Flex>
  )
}

export default LoginPage
