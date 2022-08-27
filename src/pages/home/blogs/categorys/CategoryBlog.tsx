// import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'
// import {
//   Box,
//   Button,
//   Container,
//   Flex,
//   Heading,
//   Icon,
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
// import ModalDelete from '../../../../components/modal/ModalDelete'
// import { IconEye } from '../../../../icons/IconEye'
// import { useCategoriaBlogs } from '../../../../services/useCategoriaBlogs'

// const CategoryBlog = () => {
//   const navigate = useNavigate()
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   const {
//     db: dataCategoriaBlog,
//     loading,
//     deleteCategoriaBlog,
//     updateEstadoCategoriaBlog
//   } = useCategoriaBlogs({ estado: '' })
//   const toast = useToast()
//   const [selectId, setSelectId] = useState<string | null | undefined>(null)

//   const handleDelete = () => {
//     deleteCategoriaBlog({ categoriaBlogId: selectId } as any).then((res) => {
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
//     updateEstadoCategoriaBlog({
//       categoriaBlogId: id,
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

//   return (
//     <Container maxWidth='1930px' p={'10'}>
//       <Flex flexDir={'column'}>
//         <Box maxWidth={'full'}>
//           <Heading as='h1' fontSize={22}>
//             Categoria Blogs
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
//             onClick={() => navigate('/home/create-blog-category')}
//           >
//             <Text lineHeight={0}>Crear Categoria</Text>
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
//                   <Th color='gray.400'>Descripción</Th>
//                   <Th textAlign='center' color='gray.400'>
//                     Blogs
//                   </Th>
//                   <Th textAlign='center' color='gray.400'>
//                     Acciones
//                   </Th>
//                 </Tr>
//               </Thead>
//               <Tbody>
//                 {dataCategoriaBlog.map((categoria) => (
//                   <Tr key={categoria.categoriaBlogId}>
//                     <Td>
//                       <Image
//                         boxSize='50px'
//                         objectFit='contain'
//                         src={categoria?.imagenPrincipal?.url ?? ''}
//                         alt='imgs'
//                       />
//                     </Td>
//                     <Td>{categoria.titulo}</Td>
//                     <Td>
//                       <Switch
//                         borderColor='transparent'
//                         colorScheme='primary'
//                         size='lg'
//                         isChecked={
//                           categoria?.estado === 'Activado' ? true : false
//                         }
//                         onChange={() =>
//                           handleUpdateEstado(
//                             categoria?.categoriaBlogId!,
//                             categoria?.estado!
//                           )
//                         }
//                       />
//                     </Td>
//                     <Td>{categoria.descripcion}</Td>
//                     <Td textAlign='center'>{categoria.numeroBlogs ?? 0}</Td>
//                     <Td>
//                       <Flex justifyContent='center' alignItems='center' gap={5}>
//                         {/* <IconButton aria-label='ver'>
//                           <Icon as={IconEye} />
//                         </IconButton> */}
//                         <IconButton
//                           aria-label='editar'
//                           onClick={() =>
//                             navigate(
//                               `/home/edit-blog-category/${categoria.categoriaBlogId}`,
//                               { state: { categoria } }
//                             )
//                           }
//                         >
//                           <EditIcon w={5} h={5} />
//                         </IconButton>
//                         <IconButton
//                           aria-label='eliminar'
//                           onClick={() => {
//                             onOpen()
//                             setSelectId(categoria?.categoriaBlogId)
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
//       </Flex>
//       <ModalDelete
//         isOpen={isOpen}
//         onClick={handleDelete}
//         onClose={onClose}
//         header='Eliminar Categoría'
//         body='¿Estas seguro que deseas eliminar esta categoría?'
//       />
//     </Container>
//   )
// }

// export default CategoryBlog
import React from 'react'

const CategoryBlog = () => {
  return <div>CategoryBlog</div>
}

export default CategoryBlog
