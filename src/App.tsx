import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import theme from './theme'
import client from './apollo'
import RootRouter from './routes/RootRouter'
import AuthProvider from './store/auth/AuthState'

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme} resetCSS>
        <AuthProvider>
          <BrowserRouter>
            <RootRouter />
          </BrowserRouter>
        </AuthProvider>
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default App
