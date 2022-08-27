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
// import { useLocation, useNavigate, useParams } from 'react-router-dom'
// import InputFloat from '../../../components/input/inputFloat'
// import InputImage from '../../../components/input/InputImage'

// import Select from '../../../components/shared/Select'
// import { Imagenes } from '../../../generated/graphql'
// import useForm from '../../../hooks/useFormOld'
// import { useBlogs } from '../../../services/useBlogs'
// import { useBlogSlug } from '../../../services/useBlogSlug'
// import { useCategoriaBlogs } from '../../../services/useCategoriaBlogs'

// const EditBlog = () => {
//   const [isDisable, setIsDisable] = useState(true)
//   const [cargando, setCargando] = useState(true)
//   const { slug } = useParams()
//   const { db: blog, loading } = useBlogSlug({ slug: slug! })
//   const [innerValue, setInnerValue] = useState<string>()
//   const toast = useToast()
//   const [selectValue, setSelectValue] = useState<number>()
//   const [imagenPrincipal, setImagenPrincipal] = useState<Imagenes>()
//   const [imagenSecundaria, setImagenSecundaria] = useState<Imagenes>()

//   const { db: dataCategoriaBlog, loading: locadingCategoria } =
//     useCategoriaBlogs({ estado: 'Activado' })
//   const { updateBlog, loadingUpdate } = useBlogs()

//   const categorias = dataCategoriaBlog.map((categoria) => ({
//     value: categoria?.categoriaBlogId!,
//     label: categoria?.titulo!,
//     desc: categoria?.descripcion!
//   }))
//   const navigate = useNavigate()

//   const {
//     titulo,
//     descripcionCorta,
//     descripcionLarga,
//     keywords,
//     onChange,
//     resetCustom
//   } = useForm({
//     titulo: '',
//     descripcionCorta: '',
//     descripcionLarga: '',
//     keywords: ''
//   })

//   const handleSubmit = async () => {
//     updateBlog({
//       blogId: blog?.blogId?.toString()!,
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
//     if (!loading && !locadingCategoria) {
//       if (blog.slug === slug) {
//         resetCustom({
//           titulo: blog?.titulo!,
//           descripcionCorta: blog?.descripcionCorta!,
//           descripcionLarga: blog?.descripcionLarga!,
//           keywords: blog?.keywords!
//         })
//         setImagenPrincipal(blog?.imagenPrincipal!)
//         setImagenSecundaria(blog?.imagenSecundaria!)
//         setInnerValue(blog?.CategoriaBlog?.titulo!)
//         setSelectValue(blog?.categoriaBlogId!)
//       } else {
//         navigate('/home')
//       }
//     }

//     if (
//       innerValue !== '' &&
//       selectValue !== 0 &&
//       !loading &&
//       !locadingCategoria
//     ) {
//       setCargando(false)
//     }
//   }, [loading, locadingCategoria])

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
//               Actualizar Blog
//             </Heading>
//           </Flex>
//         </Box>

//         <Box maxWidth={'full'}>
//           {cargando ? (
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
//               templateColumns={{
//                 base: 'repeat(1, 1fr)',
//                 sm: 'repeat(2, 1fr)'
//               }}
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
//               <InputFloat
//                 type="text"
//                 label="Keywords"
//                 name="keywords"
//                 value={keywords}
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
//             Actualizar Blog
//           </Text>
//         </Button>
//       </Flex>
//     </Container>
//   )
// }

// export default EditBlog
import React from 'react'

const EditBlog = () => {
  return <div>EditBlog</div>
}

export default EditBlog
