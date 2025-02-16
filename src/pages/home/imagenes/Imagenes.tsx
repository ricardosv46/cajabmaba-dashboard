import { useState } from 'react'
import {
  Box,
  Flex,
  Grid,
  Text,
  Image,
  chakra,
  Button,
  Center,
  Heading,
  Container,
  Spinner,
  useToast
} from '@chakra-ui/react'
import UploadFiles from '../../../components/shared/UploadFiles'
import useAllImagenes from '../../../services/useAllImagenes'
import { useCreateImagenMutation } from '../../../generated/graphql'
import Pagination from '../../../components/pagination'

const ImagesPage = () => {
  const toast = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [isUploadImage, setIsUploadImage] = useState(false)
  const [state, setstate] = useState({
    pagina: 1,
    numeroPagina: 10
  })

  const {
    db: imagenes,
    loading,
    refetch,
    nTotal,
    datos
    // handleUpload,
    // hasError
  } = useAllImagenes(state)

  const generatedTotal = (items: number, itemporpage: number) => {
    const n = Math.ceil(items / itemporpage)
    return Array(n)
      .fill(null)
      .map((_, i) => i + 1)
  }
  console.log(datos)
  const paginas = generatedTotal(nTotal, state.numeroPagina)

  console.log(state.numeroPagina, { nTotal }, { paginas })
  const [createImage] = useCreateImagenMutation()
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

    toast({
      status: 'success',
      title: 'Subida de imagenes exitosa',
      description: 'Todas las imagenes se han subido con exito'
    })

    setIsLoading(false)
    return true
  }

  return (
    <Container p={10} flex={1} display="flex" flexDir="column">
      <Box mb={{ base: 3, md: 8 }}>
        <Heading as="h1" fontSize={22}>
          Imagenes
        </Heading>
        <Text
          mt={3}
          fontSize="14px"
          color="blackAlpha.600"
          _dark={{ color: 'gray.400' }}
        >
          Desde aquí podrás visualizar todas tus imagenes.
        </Text>
      </Box>

      <Flex justify="flex-end" mb={{ base: 3, md: 8 }}>
        <Button
          colorScheme="primary"
          _dark={{ bg: '#F0AC42' }}
          w={{ base: 'full', md: 'max' }}
          onClick={() => {
            refetch()
            setIsUploadImage((prev) => !prev)
          }}
        >
          {isUploadImage ? 'Ver Galeria' : 'Subir Imagen'}
        </Button>
      </Flex>

      {loading && (
        <Center mt={8}>
          <Spinner size="xl" color="primary.500" />
        </Center>
      )}

      {!isUploadImage && (
        <Grid
          gap={8}
          autoRows="200px"
          templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
        >
          {imagenes?.map(({ id, url, titulo }) => (
            <chakra.button
              key={id}
              rounded="lg"
              pos="relative"
              borderWidth={1}
              cursor="pointer"
              borderColor="gray.300"
              _dark={{ borderColor: 'gray.700' }}
              _hover={{ shadow: 'md' }}
              transition="box-shadow 250ms linear"
              onClick={() => {}}
            >
              <Image
                src={url!}
                alt={titulo!}
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
              />
            </chakra.button>
          ))}
        </Grid>
      )}

      {isUploadImage && (
        <UploadFiles isLoading={isLoading} onUpload={handleUpload} />
      )}
      <Pagination state={state} setstate={setstate} paginas={paginas} />
    </Container>
  )
}

export default ImagesPage
