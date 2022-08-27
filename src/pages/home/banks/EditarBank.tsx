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
// import { useLocation, useNavigate, useParams } from 'react-router-dom'
// import InputFloat from '../../../components/input/inputFloat'
// import useForm from '../../../hooks/useFormOld'
// import { Imagenes, useGetBancoIdLazyQuery } from '../../../generated/graphql'
// import { useBancos } from '../../../services/useBancos'
// import InputImage from '../../../components/input/InputImage'

const EditarBank = () => {
  // const [isDisable, setIsDisable] = useState(true)
  // const [imgPrincipal, setImgPrincipal] = useState<Imagenes>({})
  // const { actualizarBanco } = useBancos()
  // const navigate = useNavigate()
  // const toast = useToast()
  // const { id } = useParams()
  // const { state } = useLocation() as any

  // // const [obtenerData] = useGetBancoIdLazyQuery({
  //   variables: {
  //     bancoId: parseInt(id ?? '')
  //   }
  // })

  // const { titulo, bancoId, numeroCuenta, onChange, reset, resetCustom } =
  //   useForm({
  //     numeroCuenta: '',
  //     titulo: '',
  //     bancoId: ''
  //   })

  // useEffect(() => {
  //   if (state) {
  //     resetCustom({
  //       numeroCuenta: state.numeroCuenta,
  //       titulo: state.titulo,
  //       bancoId: state.bancoId
  //     })
  //     setImgPrincipal({
  //       id: state?.imagenPrincipal?.id ?? '',
  //       url: state?.imagenPrincipal?.url ?? '',
  //       titulo: state?.imagenPrincipal?.titulo ?? ''
  //     })
  //     //   console.log('se trajo la data localmente')
  //   } else {
  //     obtenerData().then((res) => {
  //       if (res?.data?.GetBancoId) {
  //         const numeroCuenta = res.data?.GetBancoId.numeroCuenta as any
  //         const titulo = res.data?.GetBancoId.titulo as any
  //         const bancoId = res.data?.GetBancoId.bancoId as any
  //         resetCustom({
  //           numeroCuenta,
  //           titulo,
  //           bancoId
  //         })
  //         setImgPrincipal({
  //           id: res?.data?.GetBancoId?.imagenPrincipal?.id ?? '',
  //           url: res?.data?.GetBancoId?.imagenPrincipal?.url ?? '',
  //           titulo: res?.data?.GetBancoId?.imagenPrincipal?.titulo ?? ''
  //         })
  //         //   console.log('se trajo la data dl server')
  //       } else {
  //         navigate('/home')
  //       }
  //     })
  //   }
  // }, [state, id])

  // const handleSubmit = async () => {
  //   // console.log(imgPrincipal)
  //   actualizarBanco({
  //     titulo,
  //     numeroCuenta,
  //     bancoId,
  //     imagenPrincipal: imgPrincipal.id ?? ''
  //   }).then((resp) => {
  //     if (resp?.ok) {
  //       toast({
  //         title: 'Actualizado Correctamente',
  //         position: 'top-right',
  //         isClosable: true,
  //         status: 'success'
  //       })
  //       navigate('/home/bancos')
  //       reset()
  //     } else {
  //       toast({
  //         title: resp?.error,
  //         position: 'top-right',
  //         isClosable: true,
  //         status: 'error'
  //       })
  //     }
  //   })
  //   // console.log(bancoId, titulo, numeroCuenta, imgPrincipal.id)
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
              // onClick={() => navigate('/home/bancos')}
            >
              <ChevronLeftIcon color={'white'} />
            </Flex>
            <Heading as="h1" fontSize={22}>
              Editar Banco
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
              value={titulo}
              onChange={onChange}
            /> */}

            {/* <InputFloat
              type="text"
              label="N° Cuenta"
              name="numeroCuenta"
              value={numeroCuenta}
              onChange={onChange}
            /> */}
          </Grid>
          <Box marginTop="2rem">
            {/* <InputImage
              label=" Imagen Principal"
              onChange={(img) => setImgPrincipal(img)}
              value={imgPrincipal}
            /> */}
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
            Editar Banco
          </Text>
        </Button>
      </Flex>
    </Container>
  )
}

export default EditarBank
