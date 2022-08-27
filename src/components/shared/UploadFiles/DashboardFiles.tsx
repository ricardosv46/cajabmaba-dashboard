import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  IconButton,
  Image,
  Text
} from '@chakra-ui/react'
import { AddIcon, CloseIcon } from '@chakra-ui/icons'
import { FileToUpload } from '.'

interface Props {
  files?: FileToUpload[]
  inputId: string
  onCancel: () => void
  onUpload: () => void
  onDelete: (id: string) => void
}

const kbToMb = (kb: number) => parseFloat(String(Math.floor(kb / 1000)))

const DashboardFiles = ({
  files,
  inputId,
  onDelete,
  onCancel,
  onUpload
}: Props) => {
  return (
    <Flex flexDir="column" h="full">
      <Grid
        pb={2}
        gap={3}
        alignItems="center"
        borderBottomWidth={1}
        borderBottomColor="gray.200"
        _dark={{ borderBottomColor: 'gray.700' }}
        templateColumns={{
          base: 'repeat(1, minmax(0, 1fr))',
          md: 'repeat(3, minmax(0, 1fr))'
        }}
      >
        <Button
          onClick={onCancel}
          variant="ghost"
          colorScheme="primary"
          w={{ base: 'full', md: 'max' }}
        >
          Cancelar
        </Button>
        <Text
          textAlign="center"
          fontWeight="medium"
          display={{ base: 'none', md: 'block' }}
        >
          {files?.length} archivos seleccionados
        </Text>
        <Button
          ml="auto"
          w={{ base: 'full', md: 'max' }}
          as="label"
          variant="outline"
          colorScheme="primary"
          leftIcon={<Icon as={AddIcon} />}
          htmlFor={`input-file-${inputId}`}
        >
          Añadir mas
        </Button>
      </Grid>

      <Grid
        py={2}
        gap={2}
        flex={1}
        overflowY="auto"
        autoRows={{ base: '64px', md: '188px' }}
        templateColumns={{
          base: 'minmax(0, 1fr)',
          md: 'repeat(auto-fit, minmax(185px, 300px))'
        }}
      >
        {files &&
          files.map(({ id, file, blob }) => (
            <Flex
              key={id}
              gap={{ base: 3, md: 0 }}
              w="full"
              h="full"
              flexDir={{ base: 'row', md: 'column' }}
            >
              <Box
                pos="relative"
                rounded="base"
                overflow="hidden"
                w={{ base: '20', md: 'full' }}
                h={{ base: '16', md: '145px' }}
                mb={2}
              >
                <IconButton
                  top={0}
                  right={0}
                  zIndex={20}
                  size="xs"
                  pos="absolute"
                  bg="black"
                  color="gray.300"
                  aria-label="Eliminar archivo"
                  _hover={{ bg: 'blackAlpha.500' }}
                  _dark={{ bg: 'white', color: 'gray.700' }}
                  icon={<CloseIcon />}
                  onClick={() => onDelete(id)}
                  display={{ base: 'none', md: 'block' }}
                />
                <Image
                  w="full"
                  h="full"
                  inset={0}
                  zIndex={10}
                  pos="absolute"
                  alt={file.name}
                  src={URL.createObjectURL(blob)}
                />
              </Box>

              <Box>
                <Text fontSize="12px" fontWeight="medium">
                  {file.name}
                </Text>
                <Text fontSize="11px" color="#757575">
                  {kbToMb(file.size)} KB
                </Text>
                <Button
                  size="xs"
                  variant="ghost"
                  colorScheme="red"
                  onClick={() => onDelete(id)}
                  display={{ md: 'none' }}
                >
                  Eliminar
                </Button>
              </Box>
            </Flex>
          ))}
      </Grid>

      <Flex
        pt={2}
        borderTopWidth={1}
        borderTopColor="gray.200"
        _dark={{ borderTopColor: 'gray.700' }}
      >
        <Button
          onClick={onUpload}
          colorScheme="primary"
          w={{ base: 'full', md: 'max' }}
        >
          Subir {files?.length} {files?.length === 1 ? 'archivo' : 'archivos'}{' '}
        </Button>
      </Flex>
    </Flex>
  )
}

export default DashboardFiles
