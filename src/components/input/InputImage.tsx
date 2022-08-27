import { AddIcon } from '@chakra-ui/icons'
import {
  Center,
  Flex,
  Icon,
  Image,
  Spinner,
  Text,
  useDisclosure
} from '@chakra-ui/react'

import ModalImage, { Imagen } from '../shared/ModalImages'

import { useState } from 'react'

interface Props {
  label: string
  value?: Imagen
  onChange?: (image: Imagen) => void
}

const InputImage = ({ label, ...props }: Props) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const [innerValue, setInnerValue] = useState<Imagen | null>(null)

  const value = props.value ?? innerValue
  const handleSelect = props.onChange ?? setInnerValue

  /**
   * Con el value podran renderizar la imagen que deberia estar seteada en el
   * formulario padre.
   */

  const hasImage = !!value?.id

  return (
    <>
      <ModalImage {...{ isOpen, onClose }} onSelect={handleSelect} />
      <Flex justifyContent="center" onClick={onOpen}>
        <Flex
          w={96}
          h={48}
          pos="relative"
          flexDirection="column"
          border="2px"
          borderStyle="dashed"
          borderColor="slategrey"
          rounded="lg"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
        >
          {!hasImage && (
            <>
              <Center
                rounded="full"
                w={50}
                h={50}
                bg="primary.500"
                _dark={{ bg: '#F0AC42' }}
              >
                <Icon as={AddIcon} color="black" />
              </Center>
              <Text color="slategray" fontWeight="semibold" pt={2}>
                {label}
              </Text>
            </>
          )}

          {hasImage && (
            <Image
              src={value?.url!}
              alt={value?.titulo!}
              fallback={
                <Center>
                  <Spinner colorScheme="primary" size="lg" />
                </Center>
              }
              w="full"
              h="full"
              pos="absolute"
              inset={0}
              objectFit="contain"
              zIndex={10}
            />
          )}
        </Flex>
      </Flex>
    </>
  )
}

export default InputImage
