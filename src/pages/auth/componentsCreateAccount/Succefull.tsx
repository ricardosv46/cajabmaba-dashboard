import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Container, Flex, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import CheckIconStart from '../../../assets/icons/CheckIconStart'

const Succefull = () => {
  const navigate = useNavigate()
  return (
    <Container
      maxWidth='1930px'
      pb={{ base: '10', lg: '0' }}
      pt={{ base: '5', lg: '16' }}
      px={{ base: '8', lg: '16' }}
    >
      <Flex alignItems={'center'} gap={4} pb={5}>
        <Flex
          justifyContent='center'
          alignItems='center'
          padding={1.5}
          bg='primary.500'
          rounded='full'
          cursor={'pointer'}
          onClick={() => navigate(-1)}
        >
          <ChevronLeftIcon color={'white'} />
        </Flex>
        <Text>Regresar</Text>
      </Flex>
      <Flex flexDirection='column' alignItems='center' pt={5}>
        <CheckIconStart />

        <Text fontSize={{ base: 'xl', lg: '2xl' }} pt={5} fontWeight='bold'>
          Tu cuenta ha sido creada exitosamente, ahora vamos a redirigirte a
          nuestra plataforma
        </Text>
      </Flex>
    </Container>
  )
}

export default Succefull
