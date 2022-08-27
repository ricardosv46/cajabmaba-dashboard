// import { ChevronLeftIcon } from '@chakra-ui/icons'
// import {
//   Box,
//   Button,
//   Checkbox,
//   Container,
//   Flex,
//   Grid,
//   Heading,
//   Text,
//   useToast
// } from '@chakra-ui/react'
// import { useEffect, useState } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'
// import InputFloat from '../../../../components/input/inputFloat'
// import InputImage from '../../../../components/input/InputImage'

// import { Imagenes } from '../../../../generated/graphql'

// import useForm from '../../../../hooks/useFormOld'
// import { useCategoriaBlogs } from '../../../../services/useCategoriaBlogs'

// const EditCategoryBlog = () => {
//   const [isDisable, setIsDisable] = useState(true)
//   const { state: objetoCategoriaBlog } = useLocation() as any
//   const { updateCategoriaBlog, loadingUpdate } = useCategoriaBlogs()
//   const [imagenPrincipal, setImagenPrincipal] = useState<Imagenes>(
//     objetoCategoriaBlog?.categoria?.imagenPrincipal
//   )
//   const [imagenSecundaria, setImagenSecundaria] = useState<Imagenes>(
//     objetoCategoriaBlog?.categoria?.imagenSecundaria
//   )
//   const navigate = useNavigate()
//   const toast = useToast()

//   const { titulo, keywords, descripcion, onChange } = useForm({
//     titulo: objetoCategoriaBlog?.categoria?.titulo,
//     keywords: objetoCategoriaBlog?.categoria?.keywords,
//     descripcion: objetoCategoriaBlog?.categoria?.descripcion
//   })

//   const handleSubmit = async () => {
//     updateCategoriaBlog({
//       categoriaBlogId: objetoCategoriaBlog?.categoria?.categoriaBlogId,
//       titulo,
//       keywords,
//       descripcion,
//       imagenPrincipal: Number(imagenPrincipal?.id),
//       imagenSecundaria: Number(imagenSecundaria?.id)
//     }).then((res) => {
//       if (res.ok) {
//         toast({
//           title: `Creado Correctamente`,
//           position: 'top-right',
//           isClosable: true,
//           status: 'success'
//         })
//         navigate('/home/blogs-category')
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
//     if ([titulo, keywords, descripcion].includes('')) {
//       setIsDisable(true)
//     } else {
//       setIsDisable(false)
//     }
//   }, [titulo, keywords, descripcion])

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
//               Actualizar Categoria
//             </Heading>
//           </Flex>
//         </Box>

//         <Box maxWidth={'full'}>
//           <Grid
//             mt={5}
//             templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }}
//             gap={6}
//           >
//             <InputFloat
//               type="text"
//               label="Titulo"
//               name="titulo"
//               value={titulo}
//               onChange={onChange}
//             />

//             <InputFloat
//               type="text"
//               label="Keywords"
//               name="keywords"
//               value={keywords}
//               onChange={onChange}
//             />
//             <InputFloat
//               type="text"
//               label="Descripción"
//               name="descripcion"
//               value={descripcion}
//               onChange={onChange}
//             />
//             <Box></Box>
//             <InputImage
//               value={imagenPrincipal}
//               onChange={setImagenPrincipal}
//               label=" Imagen Principal"
//             />
//             <InputImage
//               value={imagenSecundaria}
//               onChange={setImagenSecundaria}
//               label=" Imagen Secundaria"
//             />
//           </Grid>
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
//             Actualizar Categoria
//           </Text>
//         </Button>
//       </Flex>
//     </Container>
//   )
// }

// export default EditCategoryBlog
import React from 'react'

const EditCategoryBlog = () => {
  return <div>EditCategoryBlog</div>
}

export default EditCategoryBlog
