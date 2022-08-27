import { Box, Flex, Text } from '@chakra-ui/react'
import { IconLogo } from '../../../icons'

const TextWelcome = () => {
  return (
    <Box
      display='flex'
      // alignItems='center'
      flexDirection='column'
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
      <Box>
        <Text fontSize={{ base: '2xl', lg: '3xl' }} pt={5} fontWeight='bold'>
          Te damos la bienvenida a
          <Text
            as={'span'}
            color='primary.500'
            pt={2}
            pl={1}
            fontWeight='semibold'
          >
            Finmediato
          </Text>
        </Text>
      </Box>
    </Box>
  )
}

export default TextWelcome
