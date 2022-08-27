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
// import { useLocation, useNavigate } from 'react-router-dom'
// import InputFloat from '../../../components/input/inputFloat'
// import InputImage from '../../../components/input/InputImage'

// import Select from '../../../components/shared/Select'
// import { Imagenes } from '../../../generated/graphql'
// import useForm from '../../../hooks/useFormOld'
// import { useCategoriaProductos } from '../../../services/useCategoriaProductos'
// import { useProductos } from '../../../services/useProductos'

// const EditProduct = () => {
//   const [isDisable, setIsDisable] = useState(true)
//   const { state: objetoProducto } = useLocation() as any
//   const [innerValue, setInnerValue] = useState(
//     objetoProducto?.producto?.CategoriaProducto?.titulo
//   )
//   const toast = useToast()
//   const [selectValue, setSelectValue] = useState(
//     objetoProducto?.producto?.categoriaProductoId
//   )
//   const [imagenPrincipal, setImagenPrincipal] = useState<Imagenes>(
//     objetoProducto?.producto?.imagenPrincipal
//   )
//   const [imagenSecundaria, setImagenSecundaria] = useState<Imagenes>(
//     objetoProducto?.producto?.imagenSecundaria
//   )

//   console.log(objetoProducto)

//   const { db: dataCategoriaProducto, loading: locadingCategoria } =
//     useCategoriaProductos({ estado: 'Activado' })
//   const { updateProducto } = useProductos()

//   const categorias = dataCategoriaProducto.map((categoria) => ({
//     value: categoria?.categoriaProductoId!,
//     label: categoria?.titulo!,
//     desc: categoria?.descripcion!
//   }))
//   const navigate = useNavigate()

//   const {
//     titulo,
//     descripcionCorta,
//     descripcionLarga,
//     keywords,
//     precioReal,
//     precioOferta,
//     stockMinimo,
//     stockReal,
//     onChange
//   } = useForm({
//     titulo: objetoProducto?.producto?.titulo,
//     descripcionCorta: objetoProducto?.producto?.descripcionCorta,
//     descripcionLarga: objetoProducto?.producto?.descripcionLarga,
//     keywords: objetoProducto?.producto?.keywords,
//     precioReal: objetoProducto?.producto?.precioReal,
//     precioOferta: objetoProducto?.producto?.precioOferta,
//     stockMinimo: objetoProducto?.producto?.stockMinimo,
//     stockReal: objetoProducto?.producto?.stockReal
//   })

//   const handleSubmit = async () => {
//     updateProducto({
//       productoId: objetoProducto?.producto?.productoId.toString(),
//       titulo,
//       descripcionCorta,
//       descripcionLarga,
//       precioReal: Number(precioReal),
//       precioOferta: Number(precioOferta),
//       stockMinimo: Number(stockMinimo),
//       stockReal: Number(stockReal),
//       imagenPrincipal: Number(imagenPrincipal?.id),
//       imagenSecundaria: Number(imagenSecundaria?.id),
//       galeria: ['33'],
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
//         keywords,
//         precioReal,
//         precioOferta,
//         stockMinimo,
//         stockReal
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
//     keywords,
//     precioReal,
//     precioOferta,
//     stockMinimo,
//     stockReal,
//     selectValue
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

// export default EditProduct
import React from 'react'

const EditProduct = () => {
  return <div>EditProduct</div>
}

export default EditProduct
