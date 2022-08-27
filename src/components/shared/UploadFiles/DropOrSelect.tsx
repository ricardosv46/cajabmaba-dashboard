import { Center, Text } from '@chakra-ui/react'

interface Props {
  inputId: string
}

const DropOrSelect = ({ inputId }: Props) => {
  return (
    <Center
      p={8}
      w="full"
      h="full"
      borderWidth={1}
      borderStyle="dashed"
      borderColor="gray.300"
    >
      <Text fontSize={{ base: 18, md: 28 }} textAlign="center">
        Arratra tus archivos o{' '}
        <Text
          htmlFor={`input-file-${inputId}`}
          as="label"
          color="blue.600"
          _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
        >
          selecciona tus archivos
        </Text>
      </Text>
    </Center>
  )
}

export default DropOrSelect
