import { ChevronLeftIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Text
  // useToast
} from '@chakra-ui/react'
// import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import InputFloat from '../../../components/input/inputFloat'
import InputImage from '../../../components/input/InputImage'
// import useForm from '../../../hooks/useFormOld'
// import { Imagenes } from '../../../generated/graphql'
// import { useBancos } from '../../../services/useBancos'

const CreateBanks = () => {
  // const [isDisable, setIsDisable] = useState(true)
  // const [imgPrincipal, setImgPrincipal] = useState<Imagenes>({})
  // const { crearBanco } = useBancos()
  const navigate = useNavigate()
  // const toast = useToast()

  // const { titulo, numeroCuenta, onChange, reset } = useForm({
  //   titulo: '',
  //   numeroCuenta: ''
  // })

  // const handleSubmit = async () => {
  //   crearBanco({
  //     titulo,
  //     numeroCuenta
  //     // imagenPrincipal: parseInt(imgPrincipal.id ?? '')
  //   }).then((resp) => {
  //     if (resp?.ok) {
  //       toast({
  //         title: 'Banco creado correctamente',
  //         position: 'top-right',
  //         isClosable: true,
  //         status: 'success'
  //       })
  //       reset()
  //       navigate('/home/bancos')
  //     } else {
  //       toast({
  //         title: resp?.error,
  //         position: 'top-right',
  //         isClosable: true,
  //         status: 'error'
  //       })
  //     }
  //   })
  // }

  // useEffect(() => {
  //   if ([titulo.trim(), numeroCuenta.trim()].includes('')) {
  //     setIsDisable(true)
  //   } else {
  //     setIsDisable(false)
  //   }
  // }, [titulo, numeroCuenta])

  return (
    <Container maxWidth="1930px" p={'10'}>
      <Flex flexDir={'column'}>
        <Box maxWidth={'full'}>
          <Flex alignItems={'center'} columnGap={4}>
            <Flex
              justifyContent="center"
              alignItems="center"
              padding={1.5}
              bg="primary.500"
              rounded="full"
              cursor={'pointer'}
              onClick={() => navigate('/bancos')}
            >
              <ChevronLeftIcon color={'white'} />
            </Flex>
            <Heading as="h1" fontSize={22}>
              Crear Banco
            </Heading>
          </Flex>
        </Box>

        <Box maxWidth={'full'}>
          <Grid
            mt={5}
            templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }}
            gap={6}
          >
            {/* <InputFloat
              type="text"
              label="Titulo"
              name="titulo"
              // value={titulo}
              // onChange={onChange}
            /> */}

            {/* <InputFloat
              type="text"
              label="N° Cuenta"
              name="numeroCuenta"
              // value={numeroCuenta}
              // onChange={onChange}
            /> */}
          </Grid>
          <Box marginTop="2rem">
            <InputImage
              label=" Imagen Principal"
              // onChange={(img) => setImgPrincipal(img)}
              // value={imgPrincipal}
            />
          </Box>
        </Box>
      </Flex>
      <Flex justifyContent="center" py={14}>
        <Button
          type="button"
          w={96}
          py={7}
          colorScheme="primary"
          // onClick={handleSubmit}
          // disabled={isDisable}
        >
          <Text fontWeight="bold" fontSize="xl">
            Crear Banco
          </Text>
        </Button>
      </Flex>
    </Container>
  )
}

export default CreateBanks
