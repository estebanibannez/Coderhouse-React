import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/List/ItemListContainer';
import ItemDetailContainer from './components/List/ItemDetailContainer';
import { VStack, Stack, Text, useBreakpointValue, Image } from '@chakra-ui/react';
import Error404 from './components/Error404/Error404';
import { Cart } from './components/Cart/Cart';
import CartContext from './components/Context/CartContext';
import useInitialState from './components/Hooks/useInitialState';

function App() {
  const initialState = useInitialState();
  return (
    <CartContext.Provider value={initialState}>
      <BrowserRouter>
        <NavBar />
        <Layout>
          <Routes>
            <Route exact path="productos" element={<ItemListContainer />} />
            <Route
              exact
              path="contacto"
              element={
                <>
                  <Error404 />
                </>
              }
            />
            <Route exact path="item/:id" element={<ItemDetailContainer />} />
            <Route exact path="categoria/:id" element={<ItemListContainer />} />
            <Route
              exact
              path="cart"
              element={
                <>
                  <Cart />
                </>
              }
            />
            <Route
              path="/"
              exact
              element={
                <>
                  <VStack
                    w={'full'}
                    justify={'center'}
                    px={useBreakpointValue({ base: 4, md: 8 })}
                    bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
                  >
                    <Stack maxW={'2xl'} align={'flex-start'} maxH={'auto'} spacing={2}>
                      <Image src={window.location.origin + '/bannerlogo.png'} alt="Dan Abramov" />
                      <Text
                        color={'white'}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize={useBreakpointValue({ base: '2xl', md: '2xl' })}
                      >
                        {/* Nuevos productos */}
                      </Text>
                    </Stack>
                  </VStack>

                  <ItemListContainer />
                </>
              }
            />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Layout>
        <Footer />
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
