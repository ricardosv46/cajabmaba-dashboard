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
// import BtnDestacado from '../../../components/Buttons/BtnDestacado'
// import ModalDelete from '../../../components/modal/ModalDelete'
// import Pagination from '../../../components/pagination'
// import { useProductos } from '../../../services/useProductos'

// const ProductsPage = () => {
//   const { db: dataProductos, loading, nTotal } = useProductos()
//   const [selectId, setSelectId] = useState<string | null | undefined>(null)
//   const toast = useToast()
//   const { deleteProducto, updateEstadoProducto, updateDestacadoProducto } = useProductos()
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   const navigate = useNavigate()
//   const [state, setstate] = useState({
//     page: 1,
//     numberPaginate: 10
//   })

//   const generatedTotal = (items: number, itemporpage: number) => {
//     const n = Math.ceil(items / itemporpage)
//     return Array(n)
//       .fill(null)
//       .map((_, i) => i + 1)
//   }
//   const paginas = generatedTotal(nTotal, state.numberPaginate)

//   const handleDelete = () => {
//     deleteProducto({ productoId: selectId } as any).then((res) => {
//       if (res?.ok) {
//         toast({
//           title: 'Eliminado Correctamente',
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

//   const handleUpdateEstado = (id: string, estado: string) => {
//     updateEstadoProducto({
//       productoId: id,
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

//   const handleUpdateDestacado = (id: string, destacado: string) => {
//     updateDestacadoProducto({
//       productoId: id,
//       destacado: destacado === 'Activado' ? 'Desactivado' : 'Activado'
//     }).then((res) => {
//       if (res?.ok) {
//         toast({
//           title: 'Destacado Actualizado Correctamente',
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
//             Productos
//           </Heading>
//           <Text
//             color='blackAlpha.600'
//             _dark={{ color: 'gray.400' }}
//             fontSize='14px'
//             mt={3}
//           >
//             Desde aquí podrás visualizar la información de todos tus productos.
//           </Text>
//         </Box>
//         <Flex justifyContent='flex-end' alignItems='center' mt={5}>
//           <Button
//             colorScheme='primary'
//             variant='solid'
//             leftIcon={<AddIcon />}
//             onClick={() => navigate('/home/create-product')}
//           >
//             <Text lineHeight={0}>Crear Producto</Text>
//           </Button>
//         </Flex>
//         {loading ? (
//           <Flex justifyContent='center' alignItems='center' h={'xl'}>
//             <Spinner
//               thickness='4px'
//               speed='0.65s'
//               emptyColor='gray.200'
//               color='primary.500'
//               size='xl'
//             />
//           </Flex>
//         ) : (
//           <TableContainer mt={10}>
//             <Table colorScheme='gray'>
//               <Thead fontWeight={'black'}>
//                 <Tr>
//                   <Th color='gray.400'>Imagen</Th>
//                   <Th color='gray.400'>Titulo</Th>
//                   <Th color='gray.400'>Estado</Th>
//                   <Th textAlign='center' color='gray.400'>
//                     Destacado
//                   </Th>
//                   <Th color='gray.400'>Categoria</Th>
//                   <Th textAlign='center' color='gray.400'>
//                     Acciones
//                   </Th>
//                 </Tr>
//               </Thead>
//               <Tbody>
//                 {dataProductos.map((producto: any) => (
//                   <Tr key={producto.productoId}>
//                     <Td>
//                       <Image
//                         boxSize='50px'
//                         objectFit='contain'
//                         src={producto?.imagenPrincipal?.url ?? ''}
//                         alt='imgs'
//                       />
//                     </Td>
//                     <Td>{producto?.titulo}</Td>
//                     <Td>
//                       {' '}
//                       <Switch
//                         borderColor='transparent'
//                         colorScheme='primary'
//                         size='lg'
//                         isChecked={producto?.estado === 'Activado'}
//                         onChange={() =>
//                           handleUpdateEstado(producto?.productoId!, producto?.estado!)
//                         }
//                       />
//                     </Td>
//                     <Td>
//                       <Box
//                         onClick={() =>
//                           handleUpdateDestacado(producto?.productoId!, producto?.destacado!)
//                         }
//                         cursor='pointer'
//                       >
//                         <BtnDestacado
//                           estado={producto?.destacado === 'Activado'}
//                         />
//                       </Box>
//                     </Td>
//                     <Td>{producto?.CategoriaProducto?.titulo}</Td>
//                     <Td>
//                       <Flex justifyContent='center' alignItems='center' gap={5}>
//                         <IconButton
//                           aria-label='editar'
//                           onClick={() =>
//                             navigate(`/home/edit-product/${producto.productoId}`, {
//                               state: { producto }
//                             })
//                           }
//                         >
//                           <EditIcon w={5} h={5} />
//                         </IconButton>
//                         <IconButton
//                           aria-label='eliminar'
//                           onClick={() => {
//                             onOpen()
//                             setSelectId(producto?.productoId)
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
//         )}

//         <Pagination state={state} setstate={setstate} paginas={paginas} />
//       </Flex>
//       <ModalDelete
//         isOpen={isOpen}
//         onClick={handleDelete}
//         onClose={onClose}
//         header='Eliminar Blog'
//         body='¿Estas seguro que deseas eliminar este blog?'
//       />
//     </Container>
//   )
// }

// export default ProductsPage
import React from 'react'

const ProductsPage = () => {
  return <div>ProductsPage</div>
}

export default ProductsPage
