import { Suspense, useMemo } from 'react'
import { Box, Flex, Show } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'

import Navbar from '../components/layout/Navbar'
import Sidebar from '../components/layout/Sidebar'
import WelcomePage from '../pages/home/WelcomePage'
import { getRoutes } from './routes'

const HomeRouter = () => {
  const { mainRoutes, subRoutes } = useMemo(() => getRoutes(), [])

  return (
    <Flex justifyContent={'space-between'} minH='100vh'>
      <Show breakpoint='(min-width: 1000px)'>
        <Box w='405px'>
          <Sidebar mobile={false} onToggle={() => {}} onClose={() => {}} />
        </Box>
      </Show>
      <Flex width='full' h='100vh' overflowY='auto' flexDir='column'>
        <Show breakpoint='(max-width: 1000px)'>
          <Navbar />
        </Show>
        <Suspense fallback={<h1>Cargando...</h1>}>
          <Routes>
            <Route index element={<WelcomePage />} />

            {mainRoutes.map(({ path, name, component: Component }) => {
              return <Route key={name} path={path} element={<Component />} />
            })}

            {subRoutes.map(({ path, name, component: Component }) => {
              return <Route key={name} path={path} element={<Component />} />
            })}
            {/*
            <Route path="messages" element={<MessagesPage />} />
            <Route path="multi-step" element={<MultiStepPage />} />
            <Route path="profile" element={<Profile />} />
            <Route path="configuraciones" element={<Profile />} /> */}
            {/* Rutas Blogs */}
            {/* <Route path="blogs" element={<BlogsPage />} />
            <Route path="blogs/create-blog" element={<CreateBlog />} />
            <Route path="blogs/edit-blog" element={<EditBlog />} /> */}
            {/* Rutas Blogs-Categoria */}
            {/* <Route path="blogs-category" element={<CategoriaBlog />} />
            <Route
              path="blogs-category/create-blog-category"
              element={<CreateCategoryBlog />}
            />
            <Route
              path="blogs-category/edit-blog-category"
              element={<EditCategoryBlog />}
            />{' '} */}
            {/* Rutas Clientes */}
            {/* <Route path="clients" element={<ClientsPage />} />
            <Route
              path="clients/create-client"
              element={<CreateClientPage />}
            />
            <Route path="clients/edit-client" element={<EditClientPage />} /> */}
            {/* Rutas Productos */}
            {/* <Route path="products" element={<ProductsPage />} />
            <Route path="products/create-product" element={<CreateProduct />} />
            <Route path="products/edit-product" element={<EditProduct />} /> */}
            {/* Rutas Productos-Categoria */}
            {/* <Route path="products-category" element={<CategoryProduct />} />
            <Route
              path="products-category/create-category-product"
              element={<CreateCategoryProduct />}
            />
            <Route
              path="products-category/edit-category-product"
              element={<EditCategoryProduct />}
            /> */}
          </Routes>
        </Suspense>
      </Flex>
    </Flex>
  )
}

export default HomeRouter
