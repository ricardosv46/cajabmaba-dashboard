import { useRef, useState } from 'react'
import {
  Button,
  Grid,
  Modal,
  Image,
  chakra,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  Center,
  Spinner,
  Heading,
  Flex,
  useToast,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Text
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { FocusableElement } from '@chakra-ui/utils'

import UploadFiles from '../UploadFiles'
import useAllImagenes from '../../../services/useAllImagenes'

import {
  useGetAllImagenesQuery,
  useCreateImagenMutation,
  useDeleteImagenMutation
} from '../../../generated/graphql'

export interface Imagen {
  id?: string | null | undefined 
  titulo?: string | null | undefined
  url?: string | null | undefined
}

interface Props {
  isOpen: boolean
  onClose: () => void
  onSelect?: (imagen: Imagen) => void
}

const ModalImage = ({ isOpen, onClose, onSelect }: Props) => {
  const toast = useToast()
  const [createImage] = useCreateImagenMutation()
  const [deleteImage, { loading: deleteLoading }] = useDeleteImagenMutation()
  const { db: data, refetch } = useAllImagenes({ pagina: 1, numeroPagina: 90 })
  console.log(data)

  const cancelRef = useRef<HTMLButtonElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [openAlert, setOpenAlert] = useState(false)
  const [isUploadImage, setIsUploadImage] = useState(false)
  const [selectedImage, setSelectedImage] = useState<Imagen | null>(null)

  const handleUpload = async (files: File[]) => {
    let hasError = false
    setIsLoading(true)

    for (const file of files) {
      try {
        await createImage({ variables: { imagen: file } })
      } catch (error) {
        hasError = true
        console.log('Error al subir imagenes: ', error)
      }
    }

    if (hasError) {
      setIsLoading(false)
      toast({
        status: 'error',
        title: 'Error en la subida de imagenes',
        description: 'Ha ocurrido un error en la subida de imagenes.'
      })
      return false
    }

    refetch()

    toast({
      status: 'success',
      title: 'Subida de imagenes exitosa',
      description: 'Todas las imagenes se han subido con exito'
    })

    setIsLoading(false)
    return true
  }

  const handleDelete = async () => {
    let hasError = false

    try {
      await deleteImage({ variables: { id: +selectedImage?.id! } })
    } catch (error) {
      hasError = true
      console.log('Error al subir imagenes: ', error)
    }

    if (hasError) {
      toast({
        status: 'error',
        title: 'Error al eliminar la imagen',
        description: 'Ha ocurrido un error al eliminar de imagenes.'
      })
      return false
    }

    refetch()

    toast({
      status: 'success',
      title: 'La imagen ha sido eliminada'
    })

    setOpenAlert(false)
  }

  const handleClose = () => {
    onClose()
    setIsLoading(false)
    setSelectedImage(null)
    setIsUploadImage(false)
  }

  const handleSelect = () => {
    if (typeof onSelect === 'function') {
      onSelect(selectedImage!)
    }
    handleClose()
  }

  return (
    <>
      <AlertDialog
        isCentered
        isOpen={openAlert}
        leastDestructiveRef={cancelRef}
        onClose={() => setOpenAlert(false)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Eliminar Imagen
            </AlertDialogHeader>

            <AlertDialogBody>
              <Text>Estas seguro que deseas eliminar la imagen</Text>
              <Text>{selectedImage?.titulo} ?</Text>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={() => setOpenAlert(false)}>
                Cancelar
              </Button>
              <Button colorScheme="red" onClick={handleDelete} ml={3}>
                Eliminar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      <Modal isOpen={isOpen} onClose={handleClose} scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent w="full" maxW="90vw" minH="90vh" bg="gray.800">
          <ModalHeader>
            <Flex justify="space-between" align="center" mt={10}>
              <Heading>Imagenes</Heading>

              <Button
                variant="outline"
                colorScheme="primary"
                onClick={() => setIsUploadImage((prev) => !prev)}
              >
                {isUploadImage ? 'Ver galeria' : 'Subir Imagen'}
              </Button>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex">
            {/* GALERIA */}
            {!isUploadImage && (
              <Grid
                w="full"
                gap={8}
                autoRows="200px"
                templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
              >
                {data &&
                  data?.map((image) => {
                    const isActive = selectedImage?.id === image.id

                    return (
                      <chakra.button
                        key={image?.id}
                        rounded="lg"
                        pos="relative"
                        borderWidth={1}
                        cursor="pointer"
                        borderColor={isActive ? 'primary.500' : 'gray.300'}
                        _dark={{
                          borderColor: isActive ? 'primary.500' : 'gray.700'
                        }}
                        overflow="hidden"
                        _hover={{ shadow: 'md' }}
                        transition="box-shadow 250ms linear"
                        onClick={() => {
                          setSelectedImage((actualImage) =>
                            actualImage?.id === image.id ? null : image
                          )
                        }}
                      >
                        {isActive && (
                          <Center
                            w={5}
                            h={5}
                            top={0}
                            right={0}
                            pos="absolute"
                            color="black"
                            bg="primary.500"
                            zIndex={20}
                          >
                            <CheckIcon fontSize="12px" />
                          </Center>
                        )}

                        <Image
                          src={image?.url!}
                          alt={image?.titulo!}
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
                      </chakra.button>
                    )
                  })}
              </Grid>
            )}

            {/* UPLOAD FILES */}
            {isUploadImage && (
              <UploadFiles isLoading={isLoading} onUpload={handleUpload} />
            )}
          </ModalBody>

          <ModalFooter>
            <Flex>
              <Button
                variant="ghost"
                colorScheme="red"
                mr={3}
                onClick={onClose}
              >
                Cerrar
              </Button>
              <Button
                mr={3}
                variant="outline"
                colorScheme="red"
                isLoading={deleteLoading}
                onClick={() => setOpenAlert(true)}
                disabled={selectedImage === null}
              >
                Eliminar
              </Button>
              <Button
                mr={3}
                colorScheme="primary"
                onClick={handleSelect}
                disabled={selectedImage === null}
              >
                Seleccionar
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalImage
