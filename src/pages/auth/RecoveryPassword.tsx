import { ChevronLeftIcon, ViewIcon } from '@chakra-ui/icons'
import { Box, Button, Container, Flex, Text, useToast } from '@chakra-ui/react'
import { FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputFloat from '../../components/input/inputFloat'
import useForm from '../../hooks/useFormOld'
import { IconLogo } from '../../icons'

const ChangePassword = () => {
  const navigate = useNavigate()
  const [change, setchange] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)

  const { email, onChange } = useForm({ email: '' })
  const toast = useToast()

  useEffect(() => {
    if (email.length > 5) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [email])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setchange(true)
  }

  return (
    <Flex
      flexDirection={{ base: 'column', lg: 'row' }}
      w="full"
      h="calc(100vh)"
    >
      <Box
        display="flex"
        // alignItems='center'
        flexDirection="column"
        w={{ base: 'full', lg: '500px' }}
        _light={{ bg: 'gray.100', color: 'gray.800' }}
        _dark={{ bg: 'gray.700', color: 'white' }}
        h={{ base: 'auto', lg: '100%' }}
        pt={{ base: 10, lg: 28 }}
        pb={{ base: 10, lg: 0 }}
        px={{ base: 10, lg: 20 }}
      >
        <Box pb={4}>
          <IconLogo height={100} />
        </Box>

        <Text fontSize={{ base: '2xl', lg: '4xl' }} fontWeight="bold">
          Recuperar Contraseña
        </Text>
      </Box>
      <Container maxWidth="1930px" p={{ base: 7, lg: 20 }}>
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
        {!change ? (
          <form onSubmit={handleSubmit}>
            <Text textAlign="center" pt={5} fontWeight="semibold" fontSize="xl">
              Por favor ingresa tu información registrada, enviaremos la
              contraseña a tu correo electrónico.
            </Text>
            <Flex py={10} gap={10} maxWidth={96} m="auto">
              <InputFloat
                type="email"
                label="Email"
                name="email"
                value={email}
                onChange={onChange}
              />
            </Flex>
            <Flex maxWidth={96} m="auto">
              <Button
                type="submit"
                colorScheme="primary"
                w={{ base: 'full', md: 96 }}
                py={7}
                disabled={isDisabled}
              >
                <Text fontSize="xl" fontWeight="bold">
                  Recuperar
                </Text>
              </Button>
            </Flex>
          </form>
        ) : (
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box mt={8} fontWeight="bold" fontSize="xl" textAlign="center">
              <Text>
                Se le ha enviado un correo con la recuperación de la contraseña
              </Text>
            </Box>
            <Button
              mt={10}
              colorScheme="primary"
              px={{ sm: 32 }}
              w={{ base: 'full', sm: 'auto' }}
              py={7}
              onClick={() => navigate('/auth/login')}
            >
              <Text fontSize="xl" fontWeight="bold">
                Iniciar sesión
              </Text>
            </Button>
          </Flex>
        )}
      </Container>
    </Flex>
  )
}

export default ChangePassword
