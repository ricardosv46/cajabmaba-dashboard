// /* eslint-disable multiline-ternary */
// import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'
// import {
//   Box,
//   Button,
//   Container,
//   Flex,
//   Heading,
//   IconButton,
//   Image,
//   Spinner,
//   Switch,
//   Table,
//   TableContainer,
//   Tbody,
//   Td,
//   Text,
//   Th,
//   Thead,
//   Tr,
//   useDisclosure,
//   useToast
// } from '@chakra-ui/react'
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import ModalDelete from '../../../../components/modal/ModalDelete'
// import { useCategoriaProductos } from '../../../../services/useCategoriaProductos'

// const CategoryProduct = () => {
//   const navigate = useNavigate()
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   const {
//     db: dataCategoriaProducto,
//     loading,
//     deleteCategoriaProducto,
//     updateEstadoCategoriaProducto
//   } = useCategoriaProductos({ estado: 'Activado' })
//   const toast = useToast()
//   const [selectId, setSelectId] = useState<string | null | undefined>(null)
//   console.log(dataCategoriaProducto)

//   const handleDelete = () => {
//     deleteCategoriaProducto({ categoriaProductoId: selectId } as any).then(
//       (res) => {
//         if (res?.ok) {
//           toast({
//             title: 'Eliminado Correctamente',
//             position: 'top-right',
//             isClosable: true,
//             status: 'success'
//           })
//         } else {
//           toast({
//             title: res?.error,
//             position: 'top-right',
//             isClosable: true,
//             status: 'error'
//           })
//         }
//       }
//     )
//   }

//   const handleUpdateEstado = (id: string, estado: string) => {
//     updateEstadoCategoriaProducto({
//       categoriaProductoId: id,
//       estado: estado === 'Activado' ? 'Desactivado' : 'Activado'
//     }).then((res) => {
//       if (res?.ok) {
//         toast({
//           title: 'Estado Actualizado Correctamente',
//           position: 'top-right',
//           isClosable: true,
//           status: 'success'
//         })
//       } else {
//         toast({
//           title: res?.error,
//           position: 'top-right',
//           isClosable: true,
//           status: 'error'
//         })
//       }
//     })
//   }
//   return (
//     <Container maxWidth='1930px' p={'10'}>
//       <Flex flexDir={'column'}>
//         <Box maxWidth={'full'}>
//           <Heading as='h1' fontSize={22}>
//             Categoria Productos
//           </Heading>
//           <Text
//             color='blackAlpha.600'
//             _dark={{ color: 'gray.400' }}
//             fontSize='14px'
//             mt={3}
//           >
//             Desde aquí podrás visualizar las categorias de los productos.
//           </Text>
//         </Box>
//         <Flex justifyContent='flex-end' alignItems='center' mt={5}>
//           <Button
//             colorScheme='primary'
//             variant='solid'
//             leftIcon={<AddIcon />}
//             onClick={() => navigate('/home/create-producto-category')}
//           >
//             <Text lineHeight={0}>Crear Categoria</Text>
//           </Button>
//         </Flex>

//         {!loading ? (
//           <TableContainer mt={10}>
//             <Table colorScheme='gray'>
//               <Thead fontWeight={'black'}>
//                 <Tr>
//                   <Th color='gray.400'>Imagen</Th>
//                   <Th color='gray.400'>Titulo</Th>
//                   <Th color='gray.400'>Estado</Th>
//                   <Th color='gray.400'>Descripción</Th>
//                   <Th textAlign='center' color='gray.400'>
//                     Acciones
//                   </Th>
//                 </Tr>
//               </Thead>
//               <Tbody>
//                 {dataCategoriaProducto.map((producto) => (
//                   <Tr key={producto.categoriaProductoId}>
//                     <Td>
//                       <Image
//                         boxSize='50px'
//                         objectFit='contain'
//                         src={producto?.imagenPrincipal?.url ?? ''}
//                         alt='imgs'
//                       />
//                     </Td>
//                     <Td>{producto.titulo}</Td>
//                     <Td>
//                       <Switch
//                         colorScheme='primary'
//                         size='lg'
//                         isChecked={producto?.estado === 'Activado'}
//                         onChange={() =>
//                           handleUpdateEstado(
//                             producto?.categoriaProductoId!,
//                             producto?.estado!
//                           )
//                         } />
//                     </Td>
//                     <Td>{producto.descripcion}</Td>
//                     <Td>
//                       <Flex justifyContent='center' alignItems='center' gap={5}>
//                         {/* <IconButton aria-label='ver'>
//                           <Icon as={IconEye} />
//                         </IconButton> */}
//                         <IconButton
//                           aria-label='editar'
//                           onClick={() =>
//                             navigate(
//                               `/home/edit-producto-category/${producto.categoriaProductoId}`,
//                               { state: { producto } }
//                             )
//                           }
//                         >
//                           <EditIcon w={5} h={5} />
//                         </IconButton>
//                         <IconButton
//                           aria-label='eliminar'
//                           onClick={() => {
//                             onOpen()
//                             setSelectId(producto?.categoriaProductoId)
//                           }}
//                         >
//                           <DeleteIcon w={5} h={5} />
//                         </IconButton>
//                       </Flex>
//                     </Td>
//                   </Tr>
//                 ))}
//               </Tbody>
//             </Table>
//           </TableContainer>
//         ) : (
//           <Flex justifyContent='center' alignItems='center' h={'xl'}>
//             <Spinner
//               thickness='4px'
//               speed='0.65s'
//               emptyColor='gray.200'
//               color='primary.500'
//               size='xl'
//             />
//           </Flex>
//         )}
//       </Flex>
//       <ModalDelete
//         isOpen={isOpen}
//         onClick={() => handleDelete}
//         onClose={onClose}
//         header='Eliminar Categoria'
//         body='¿Estas seguro que deseas eliminar este categoria?'
//       />
//     </Container>
//   )
// }

// export default CategoryProduct
import React from 'react'

const CategoryProduct = () => {
  return <div>CategoryProduct</div>
}

export default CategoryProduct
