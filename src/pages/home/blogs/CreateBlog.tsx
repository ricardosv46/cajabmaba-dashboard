// import { ChevronLeftIcon } from '@chakra-ui/icons'
// import {
//   Box,
//   Button,
//   Container,
//   Flex,
//   FormControl,
//   FormHelperText,
//   FormLabel,
//   Grid,
//   Heading,
//   Input,
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
// import { useBlogs } from '../../../services/useBlogs'
// import { useCategoriaBlogs } from '../../../services/useCategoriaBlogs'

// const CreateBlog = () => {
//   const [isDisable, setIsDisable] = useState(true)

//   const [selectValue, setSelectValue] = useState<number | undefined>(0)
//   const [innerValue, setInnerValue] = useState<string | undefined>('')
//   const { db: dataCategoriaBlog, loading: locadingCategoria } =
//     useCategoriaBlogs({ estado: 'Activado' })
//   const { createBlog } = useBlogs()
//   const toast = useToast()
//   const categorias = dataCategoriaBlog.map((categoria) => ({
//     value: categoria?.categoriaBlogId!,
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

//   const { titulo, descripcionCorta, descripcionLarga, keywords, onChange } =
//     useForm({
//       titulo: '',
//       descripcionCorta: '',
//       descripcionLarga: '',
//       keywords: ''
//     })

//   const handleSubmit = async () => {
//     createBlog({
//       titulo,
//       descripcionCorta,
//       descripcionLarga,
//       imagenPrincipal: Number(imagenPrincipal?.id),
//       imagenSecundaria: Number(imagenSecundaria?.id),
//       keywords,
//       categoriaBlogId: selectValue!
//     }).then((res) => {
//       if (res.ok) {
//         toast({
//           title: `Blog Creado Correctamente`,
//           position: 'top-right',
//           isClosable: true,
//           status: 'success'
//         })
//         navigate('/home/blogs')
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
//       [titulo, descripcionCorta, descripcionLarga, keywords].includes('') ||
//       selectValue === 0
//     ) {
//       setIsDisable(true)
//     } else {
//       setIsDisable(false)
//     }
//   }, [titulo, descripcionCorta, descripcionLarga, keywords, selectValue])

//   return (
//     <Container maxWidth="1930px" p={'10'}>
//       <FormControl>
//         <FormLabel>Email address</FormLabel>
//         <Input type="email" />
//         <FormHelperText>We'll never share your email.</FormHelperText>
//       </FormControl>
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
//               Crear Blog
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
//             <Grid
//               mt={5}
//               templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }}
//               gap={6}
//             >
//               <InputFloat
//                 type="text"
//                 label="Titulo"
//                 name="titulo"
//                 value={titulo}
//                 onChange={onChange}
//               />
//               <InputFloat
//                 type="text"
//                 label="Keywords"
//                 name="keywords"
//                 value={keywords}
//                 onChange={onChange}
//               />
//               <InputFloat
//                 type="text"
//                 label="Descripción Corta"
//                 name="descripcionCorta"
//                 value={descripcionCorta}
//                 onChange={onChange}
//               />
//               <InputFloat
//                 type="text"
//                 label="Descripción Larga"
//                 name="descripcionLarga"
//                 value={descripcionLarga}
//                 onChange={onChange}
//               />
//               <Select
//                 innerValue={innerValue!}
//                 setValue={setSelectValue}
//                 setInnerValue={setInnerValue}
//                 selectOptions={categorias!}
//                 label="Categoria"
//               />

//               <Box></Box>
//               <InputImage
//                 value={imagenPrincipal}
//                 onChange={setImagenPrincipal}
//                 label=" Imagen Principal"
//               />
//               <InputImage
//                 value={imagenSecundaria}
//                 onChange={setImagenSecundaria}
//                 label=" Imagen Secundaria"
//               />
//             </Grid>
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
//             Crear Blog
//           </Text>
//         </Button>
//       </Flex>
//     </Container>
//   )
// }

// export default CreateBlog
import React from 'react'

const CreateBlog = () => {
  return <div>CreateBlog</div>
}

export default CreateBlog
