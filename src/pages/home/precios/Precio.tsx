import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
// import { useNavigate } from 'react-router-dom'

// import usePrecio from '../../../services/usePrecios'

const Precio = () => {
  // const navigate = useNavigate()
  // const { db: precios } = usePrecio()
  // console.log(precios)
  // pedidos.map((item) => console.log(item.Usuario?.apellidos))
  return (
    <Container maxWidth="1930px" p={'10'}>
      <Flex flexDir={'column'}>
        <Box maxWidth={'full'}>
          <Heading as="h1" fontSize={22}>
            Precios
          </Heading>
          <Text
            color="blackAlpha.600"
            _dark={{ color: 'gray.400' }}
            fontSize="14px"
            mt={3}
          >
            Desde aquí podrás visualizar la información de todos los precios.
          </Text>
        </Box>
        <Flex justifyContent="flex-end" alignItems="center" mt={5}></Flex>
      </Flex>
    </Container>
  )
}

export default Precio
