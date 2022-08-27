// import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'
// import {
//   Box,
//   Button,
//   Container,
//   Flex,
//   Heading,
//   IconButton,
//   Image,
//   Show,
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
// import { useBlogs } from '../../../services/useBlogs'

// const BlogsPage = () => {
//   const { db: dataBlog, loading, nTotal } = useBlogs()
//   const [selectId, setSelectId] = useState<string | null | undefined>(null)
//   const toast = useToast()
//   const { deleteBlog, updateEstadoBlog, updateDestacadoBlog } = useBlogs()
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   const navigate = useNavigate()
//   const [state, setstate] = useState({
//     page: 1,
//     numberPaginate: 10
//   })
//   console.log(dataBlog)
//   const generatedTotal = (items: number, itemporpage: number) => {
//     const n = Math.ceil(items / itemporpage)
//     return Array(n)
//       .fill(null)
//       .map((_, i) => i + 1)
//   }
//   const paginas = generatedTotal(nTotal, state.numberPaginate)

//   const handleDelete = () => {
//     deleteBlog({ blogId: selectId } as any).then((res) => {
//       if (res?.ok) {
//         toast({
//           title: `Eliminado Correctamente`,
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
//     updateEstadoBlog({
//       blogId: Number(id),
//       estado: estado === 'Activado' ? 'Desactivado' : 'Activado'
//     }).then((res) => {
//       if (res?.ok) {
//         toast({
//           title: `Estado Actualizado Correctamente`,
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
//     updateDestacadoBlog({
//       blogId: Number(id),
//       destacado: destacado === 'Activado' ? 'Desactivado' : 'Activado'
//     }).then((res) => {
//       if (res?.ok) {
//         toast({
//           title: `Destacado Actualizado Correctamente`,
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
//             Blogs
//           </Heading>
//           <Text
//             color='blackAlpha.600'
//             _dark={{ color: 'gray.400' }}
//             fontSize='14px'
//             mt={3}
//           >
//             Desde aquí podrás visualizar la información de los clientes.
//           </Text>
//         </Box>
//         <Flex justifyContent='flex-end' alignItems='center' mt={5}>
//           <Button
//             colorScheme='primary'
//             variant='solid'
//             leftIcon={<AddIcon />}
//             onClick={() => navigate('/home/create-blog')}
//           >
//             <Text lineHeight={0}>Crear Blogs</Text>
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
//                 {dataBlog.map((blog) => (
//                   <Tr key={blog.blogId}>
//                     <Td>
//                       <Image
//                         boxSize='50px'
//                         objectFit='contain'
//                         src={blog?.imagenPrincipal?.url ?? ''}
//                         alt='imgs'
//                       />
//                     </Td>
//                     <Td>{blog?.titulo}</Td>
//                     <Td>
//                       {' '}
//                       <Switch
//                         borderColor='transparent'
//                         colorScheme='primary'
//                         size='lg'
//                         isChecked={blog?.estado === 'Activado' ? true : false}
//                         onChange={() =>
//                           handleUpdateEstado(blog?.blogId!, blog?.estado!)
//                         }
//                       />
//                     </Td>
//                     <Td>
//                       <Box
//                         onClick={() =>
//                           handleUpdateDestacado(blog?.blogId!, blog?.destacado!)
//                         }
//                         cursor='pointer'
//                       >
//                         <BtnDestacado
//                           estado={blog?.destacado === 'Activado' ? true : false}
//                         />
//                       </Box>
//                     </Td>
//                     <Td>{blog?.CategoriaBlog?.titulo}</Td>
//                     <Td>
//                       <Flex justifyContent='center' alignItems='center' gap={5}>
//                         <IconButton
//                           aria-label='editar'
//                           onClick={() =>
//                             navigate(`/home/edit-blog/${blog.slug}`)
//                           }
//                         >
//                           <EditIcon w={5} h={5} />
//                         </IconButton>
//                         <IconButton
//                           aria-label='eliminar'
//                           onClick={() => {
//                             onOpen()
//                             setSelectId(blog?.blogId)
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

// export default BlogsPage
import React from 'react'

const BlogsPage = () => {
  return <div>BlogsPage</div>
}

export default BlogsPage
