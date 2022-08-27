import { Box, Flex, Text } from '@chakra-ui/react'
import { IconLogo } from '../../../icons'

const TextYourAccount = () => {
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
        <Text fontSize={{ base: '2xl', lg: '4xl' }} fontWeight='bold'>
          Crea tu cuenta
        </Text>
      </Box>
    </Box>
  )
}

export default TextYourAccount
