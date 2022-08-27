// import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'
// import {
//   Box,
//   Button,
//   Container,
//   Flex,
//   Heading,
//   IconButton,
//   Show,
//   Table,
//   TableContainer,
//   Tbody,
//   Td,
//   Text,
//   Th,
//   Thead,
//   Tr
// } from '@chakra-ui/react'
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import Pagination from '../../../components/pagination'
// import { dataBlog } from '../../../data/dataBlog'

// const paginas = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
// ]

// const ClientsPage = () => {
//   const navigate = useNavigate()
//   const [state, setstate] = useState({
//     page: 1,
//     numberPaginate: 10
//   })

//   return (
//     <Container maxWidth='1930px' p={'10'}>
//       <Flex flexDir={'column'}>
//         <Box maxWidth={'full'}>
//           <Heading as='h1' fontSize={22}>
//             Clientes
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
//             onClick={() => navigate('create-client')}
//           >
//             <Text lineHeight={0}>Crear Cliente</Text>
//           </Button>
//         </Flex>
//         <Show above='sm'>
//           <TableContainer mt={10}>
//             <Table colorScheme='gray'>
//               <Thead fontWeight={'black'}>
//                 <Tr>
//                   <Th color='gray.400'>id</Th>
//                   <Th color='gray.400'>Factura</Th>
//                   <Th color='gray.400'>Ruc</Th>
//                   <Th color='gray.400'>Titulo</Th>
//                   <Th color='gray.400'>Fecha Pago</Th>
//                   <Th color='gray.400'>Fecha Emision</Th>
//                   <Th color='gray.400'>Plazo</Th>
//                   <Th color='gray.400'>Acciones</Th>
//                 </Tr>
//               </Thead>
//               <Tbody>
//                 {dataBlog.map((blog) => (
//                   <Tr key={blog.id}>
//                     <Td>{blog.id}</Td>
//                     <Td>{blog.factura}</Td>
//                     <Td>{blog.ruc}</Td>
//                     <Td>{blog.title}</Td>
//                     <Td>{blog.fechaPago}</Td>
//                     <Td>{blog.fechaEmision}</Td>
//                     <Td>{blog.plazo}</Td>
//                     <Td>
//                       <Flex alignItems='center' gap={5}>
//                         <IconButton
//                           aria-label='editar'
//                           onClick={() => navigate('edit-client')}
//                         >
//                           <EditIcon w={5} h={5} />
//                         </IconButton>
//                         <IconButton aria-label='eliminar'>
//                           <DeleteIcon w={5} h={5} />
//                         </IconButton>
//                       </Flex>
//                     </Td>
//                   </Tr>
//                 ))}
//               </Tbody>
//             </Table>
//           </TableContainer>
//         </Show>

//         <Show below='sm'>
//           {dataBlog.map((blog) => (
//             <Box
//               key={blog.id}
//               border={'4px'}
//               borderColor='gray.200'
//               p={'5'}
//               rounded='2xl'
//               mt={5}
//             >
//               <Text colorScheme='black' fontSize={'md'} fontWeight={'bold'}>
//                 {blog.factura}
//               </Text>
//               <Text colorScheme='black' fontWeight={'normal'} mt='-1'>
//                 {blog.title}
//               </Text>
//               <Text color={'primary.500'} fontWeight='light' my={'4px'}>
//                 RUC {blog.ruc}
//               </Text>
//               <Flex columnGap={2} mb='3px'>
//                 <Text colorScheme='black' fontWeight={'light'} fontSize={'sm'}>
//                   Monto de operacion:
//                 </Text>
//                 <Text colorScheme='black' fontSize={'14px'} fontWeight={'bold'}>
//                   ${blog.fechaPago}.00
//                 </Text>
//               </Flex>
//               <Flex columnGap={2} mb='3px'>
//                 <Text colorScheme='black' fontWeight={'light'} fontSize={'sm'}>
//                   Fecha de emisión:
//                 </Text>
//                 <Text colorScheme='black' fontSize={'14px'} fontWeight={'bold'}>
//                   {blog.fechaEmision}
//                 </Text>
//               </Flex>
//               <Flex columnGap={2} mb='3px'>
//                 <Text colorScheme='black' fontWeight={'light'} fontSize={'sm'}>
//                   Fecha de pago:
//                 </Text>
//                 <Text
//                   color={'gray.500'}
//                   bg='gray.100'
//                   px={1}
//                   fontSize={'14px'}
//                   fontWeight={'bold'}
//                 >
//                   {blog.fechaPago}
//                 </Text>
//               </Flex>
//               <Flex columnGap={2} mb='3px'>
//                 <Text colorScheme='black' fontWeight={'light'} fontSize={'sm'}>
//                   Plazo:
//                 </Text>
//                 <Text colorScheme='black' fontSize={'14px'} fontWeight={'bold'}>
//                   {blog.plazo}
//                 </Text>
//               </Flex>
//             </Box>
//           ))}
//         </Show>
//         <Pagination state={state} setstate={setstate} paginas={paginas} />
//       </Flex>
//     </Container>
//   )
// }

// export default ClientsPage
import React from 'react'

const ClientsPage = () => {
  return <div>ClientsPage</div>
}

export default ClientsPage
