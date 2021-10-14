import { Button, ChakraProvider } from '@chakra-ui/react';
import React from 'react';

import theme from './theme/theme';
import { Login } from './components/pages/Login';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}
