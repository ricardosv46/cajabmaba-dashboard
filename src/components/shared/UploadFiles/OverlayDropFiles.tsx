import { Center, Icon, Text, Flex } from '@chakra-ui/react'
import IconCloudUpload from '../../../icons/IconCloudUpload'

const OverlayDropFiles = ({ isDragging }: { isDragging?: boolean }) => {
  return (
    <Center
      inset={0}
      w="full"
      h="full"
      pos="absolute"
      transition="opacity 250ms ease-out"
      opacity={isDragging ? '1' : '0'}
      pointerEvents={isDragging ? 'auto' : 'none'}
      bg="rgba(250, 250, 250, 0.95)"
      _dark={{ bg: 'rgba(0, 0, 0, 0.95)' }}
      zIndex={30}
    >
      <Flex justify="center" align="center" flexDir="column">
        <Icon as={IconCloudUpload} fontSize={48} color="primary.500" />
        <Text
          color="gray.600"
          _dark={{ color: 'gray.400' }}
          fontWeight="semibold"
        >
          Deja caer tus archivos aqui
        </Text>
      </Flex>
    </Center>
  )
}

export default OverlayDropFiles
