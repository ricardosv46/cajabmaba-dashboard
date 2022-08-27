// /* eslint-disable multiline-ternary */
// import { ChevronLeftIcon } from '@chakra-ui/icons'
// import {
//   Box,
//   Button,
//   Container,
//   Flex,
//   Grid,
//   Heading,
//   Spinner,
//   Text,
//   useToast
// } from '@chakra-ui/react'
// import { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import InputFloat from '../../../components/input/inputFloat'
// import InputImage from '../../../components/input/InputImage'

// import Select from '../../../components/shared/Select'
// import { Imagenes } from '../../../generated/graphql'
// import useForm from '../../../hooks/useFormOld'
// import { useCategoriaProductos } from '../../../services/useCategoriaProductos'
// import { useProductos } from '../../../services/useProductos'

// const CreateProduct = () => {
//   const [isDisable, setIsDisable] = useState(true)

//   const [selectValue, setSelectValue] = useState(0)
//   const [innerValue, setInnerValue] = useState('')
//   const { db: dataCategoriaProducto, loading: locadingCategoria } =
//     useCategoriaProductos({ estado: 'Activado' })
//   const { createProducto } = useProductos()
//   const toast = useToast()
//   const categorias = dataCategoriaProducto.map((categoria) => ({
//     value: categoria?.categoriaProductoId!,
//     label: categoria?.titulo!,
//     desc: categoria?.descripcion!
//   }))
//   const [imagenPrincipal, setImagenPrincipal] = useState<Imagenes>(
//     {} as Imagenes
//   )
//   const [imagenSecundaria, setImagenSecundaria] = useState<Imagenes>(
//     {} as Imagenes
//   )
//   const navigate = useNavigate()

//   const {
//     titulo,
//     descripcionCorta,
//     descripcionLarga,
//     precioReal,
//     precioOferta,
//     stockMinimo,
//     stockReal,
//     keywords,
//     onChange
//   } = useForm({
//     titulo: '',
//     descripcionCorta: '',
//     descripcionLarga: '',
//     precioReal: '',
//     precioOferta: '',
//     stockMinimo: '',
//     stockReal: '',
//     keywords: ''
//   })

//   const handleSubmit = async () => {
//     createProducto({
//       titulo,
//       descripcionCorta,
//       descripcionLarga,
//       precioReal: Number(precioReal),
//       precioOferta: Number(precioOferta),
//       stockMinimo: Number(stockMinimo),
//       stockReal: Number(stockReal),
//       imagenPrincipal: Number(imagenPrincipal?.id),
//       imagenSecundaria: Number(imagenSecundaria?.id),
//       galeria: ['62'],
//       keywords,
//       categoriaProductoId: selectValue
//     }).then((res) => {
//       if (res.ok) {
//         toast({
//           title: 'Producto Creado Correctamente',
//           position: 'top-right',
//           isClosable: true,
//           status: 'success'
//         })
//         navigate('/home/products')
//       } else {
//         toast({
//           title: res.error,
//           position: 'top-right',
//           isClosable: true,
//           status: 'error'
//         })
//       }
//     })
//   }

//   useEffect(() => {
//     if (
//       [
//         titulo,
//         descripcionCorta,
//         descripcionLarga,
//         precioReal,
//         precioOferta,
//         stockMinimo,
//         stockReal,
//         keywords
//       ].includes('') ||
//       selectValue === 0
//     ) {
//       setIsDisable(true)
//     } else {
//       setIsDisable(false)
//     }
//   }, [
//     titulo,
//     descripcionCorta,
//     descripcionLarga,
//     precioReal,
//     precioOferta,
//     stockMinimo,
//     stockReal,
//     keywords
//   ])

//   return (
//     <Container maxWidth="1930px" p={'10'}>
//       <Flex flexDir={'column'}>
//         <Box maxWidth={'full'}>
//           <Flex alignItems={'center'} columnGap={4}>
//             <Flex
//               justifyContent="center"
//               alignItems="center"
//               padding={1.5}
//               bg="primary.500"
//               rounded="full"
//               cursor={'pointer'}
//               onClick={() => navigate(-1)}
//             >
//               <ChevronLeftIcon color={'white'} />
//             </Flex>
//             <Heading as="h1" fontSize={22}>
//               Crear Producto
//             </Heading>
//           </Flex>
//         </Box>

//         <Box maxWidth={'full'}>
//           {locadingCategoria ? (
//             <Flex justifyContent="center" alignItems="center" h={'xl'}>
//               <Spinner
//                 thickness="4px"
//                 speed="0.65s"
//                 emptyColor="gray.200"
//                 color="primary.500"
//                 size="xl"
//               />
//             </Flex>
//           ) : (
//             <>
//               <Grid mt={5} templateColumns={{ base: 'repeat(1, 1fr)' }} gap={6}>
//                 <InputFloat
//                   type="text"
//                   label="Titulo"
//                   name="titulo"
//                   value={titulo}
//                   onChange={onChange}
//                 />
//               </Grid>
//               <Grid
//                 mt={5}
//                 templateColumns={{
//                   base: 'repeat(1, 1fr)',
//                   sm: 'repeat(2, 1fr)'
//                 }}
//                 gap={6}
//               >
//                 <InputFloat
//                   type="text"
//                   label="Keywords"
//                   name="keywords"
//                   value={keywords}
//                   onChange={onChange}
//                 />
//                 <Select
//                   innerValue={innerValue}
//                   setValue={setSelectValue}
//                   setInnerValue={setInnerValue}
//                   selectOptions={!locadingCategoria ? categorias : []}
//                   label="Categoria"
//                 />

//                 <InputFloat
//                   type="text"
//                   label="Descripción Corta"
//                   name="descripcionCorta"
//                   value={descripcionCorta}
//                   onChange={onChange}
//                 />
//                 <InputFloat
//                   type="text"
//                   label="Descripción Larga"
//                   name="descripcionLarga"
//                   value={descripcionLarga}
//                   onChange={onChange}
//                 />
//                 <InputFloat
//                   type="text"
//                   label="Stock Minimo"
//                   name="stockMinimo"
//                   value={stockMinimo}
//                   onChange={onChange}
//                 />
//                 <InputFloat
//                   type="text"
//                   label="Stock Real"
//                   name="stockReal"
//                   value={stockReal}
//                   onChange={onChange}
//                 />
//                 <InputFloat
//                   type="text"
//                   label="Precio Real"
//                   name="precioReal"
//                   value={precioReal}
//                   onChange={onChange}
//                 />
//                 <InputFloat
//                   type="text"
//                   label="Precio Oferta"
//                   name="precioOferta"
//                   value={precioOferta}
//                   onChange={onChange}
//                 />
//                 <InputImage
//                   value={imagenPrincipal}
//                   onChange={setImagenPrincipal}
//                   label=" Imagen Principal"
//                 />
//                 <InputImage
//                   value={imagenSecundaria}
//                   onChange={setImagenSecundaria}
//                   label=" Imagen Secundaria"
//                 />
//               </Grid>
//             </>
//           )}
//         </Box>
//       </Flex>
//       <Flex justifyContent="center" py={14}>
//         <Button
//           type="button"
//           w={96}
//           py={7}
//           colorScheme="primary"
//           onClick={handleSubmit}
//           disabled={isDisable}
//         >
//           <Text fontWeight="bold" fontSize="xl">
//             Crear Producto
//           </Text>
//         </Button>
//       </Flex>
//     </Container>
//   )
// }

// export default CreateProduct
import React from 'react'

const CreateProduct = () => {
  return <div>CreateProduct</div>
}

export default CreateProduct
