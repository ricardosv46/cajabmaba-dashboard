// import { ChevronRightIcon } from '@chakra-ui/icons'
// import {
//   Box,
//   Button,
//   Container,
//   Flex,
//   Heading,
//   Icon,
//   Text,
//   useDisclosure
// } from '@chakra-ui/react'
// import ProfileIcon from '../../assets/icons/ProfileIcon'
// import SidebarChangePassword from '../../components/layout/Sidebar/SidebarChangePassword'

// const Profile = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   return (
//     <Container maxWidth='full' p={'10'}>
//       <Flex flexDir={'column'}>
//         <Box maxWidth={'full'}>
//           <Heading as='h1' fontSize={32}>
//             Configuración de usuario
//           </Heading>
//           <Text
//             color='blackAlpha.600'
//             fontSize='14px'
//             mt={5}
//             _dark={{ color: 'whiteAlpha.600' }}
//           >
//             Desde aquí podrás actualizar tu información de usuario.
//           </Text>
//         </Box>
//         <Box mt={'14'}>
//           <Text
//             color='black'
//             fontSize='16px'
//             fontWeight={'bold'}
//             mt={2}
//             mb={5}
//             _dark={{ color: 'whiteAlpha.900' }}
//           >
//             Información personal
//           </Text>
//         </Box>
//         <Box
//           display='flex'
//           px={4}
//           py={4}
//           borderWidth={1}
//           rounded='lg'
//           gap={5}
//           w={'full'}
//         >
//           <Icon as={ProfileIcon} w={'30px'} h={'35px'} />

//           <Box
//             color='gray.700'
//             flexDirection='column'
//             fontWeight='semibold'
//             w={'full'}
//             _dark={{ color: 'whiteAlpha.800' }}
//           >
//             <Text fontSize={'16px'} color={'primary.500'}>
//               Jacqueline Narea Pareja
//             </Text>
//             <Text as='span'>RUT 12.894.184-3</Text>
//             <Flex
//               columnGap={'70px'}
//               alignItems={'start'}
//               flexDirection={['column', 'column', 'row']}
//             >
//               <Flex direction={'column'}>
//                 <Text fontWeight='normal' fontSize={'12px'}>
//                   Teléfono
//                 </Text>
//                 <Text fontWeight='bold' fontSize={'12px'}>
//                   +569 9699 5333
//                 </Text>
//               </Flex>
//               <Flex direction={'column'}>
//                 <Text fontWeight='normal' fontSize={'12px'}>
//                   Correo electrónico para notificaciones
//                 </Text>
//                 <Text fontWeight='bold' fontSize={'12px'}>
//                   jacqueline@metriks.cl
//                 </Text>
//               </Flex>
//               <Button
//                 mt={5}
//                 color='primary.500'
//                 fontSize={'12px'}
//                 variant='link'
//                 rightIcon={<ChevronRightIcon />}
//               >
//                 Actualizar
//               </Button>
//             </Flex>
//           </Box>
//         </Box>
//         <Text
//           fontSize={'16px'}
//           my={5}
//           colorScheme={'primary.500'}
//           fontWeight={'bold'}
//         >
//           Contraseña
//         </Text>

//         <Button
//           onClick={onOpen}
//           size={'md'}
//           maxW={96}
//           py={7}
//           colorScheme={'primary.500'}
//           backgroundColor={'primary.500'}
//         >
//           <Text fontSize='xl' fontWeight='bold'>
//             {' '}
//             Cambiar contraseña
//           </Text>
//         </Button>
//       </Flex>

//       <SidebarChangePassword isOpen={isOpen} onClose={onClose} />
//     </Container>
//   )
// }

// export default Profile
import React from 'react'

const Profile = () => {
  return <div>Profile</div>
}

export default Profile
