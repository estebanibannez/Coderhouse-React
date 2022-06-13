import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/List/ItemListContainer';
import ItemDetailContainer from './components/List/ItemDetailContainer';
import { Flex, VStack, Heading, Container } from '@chakra-ui/react';
import Error404 from './components/Error404/Error404';

function App() {
  return (
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
                <Container p={10}>
                  {' '}
                  <Heading color={'white'}>En construcción</Heading>
                </Container>
              </>
            }
          />
          <Route exact path="item/:id" element={<ItemDetailContainer />} />
          <Route exact path="categoria/:id" element={<ItemListContainer />} />
          <Route
            path="/"
            exact
            element={
              <>
                <Flex
                  w={'full'}
                  h={{ base: '500px', lg: '12rem', xl: '12rem' }}
                  backgroundImage={{
                    base: '/banner.png',
                    lg: '/banner.png',
                  }}
                  backgroundSize="cover"
                  backgroundPosition="right center"
                >
                  <VStack
                    w={'full'}
                    justify={'center'}
                    px={{ base: 4, md: 8, xl: 16 }}
                    bgGradient={`linear(to-r, blackAlpha.300", transparent)`}
                    alignItems={'flex-start'}
                  ></VStack>
                </Flex>
                <ItemListContainer />
              </>
            }
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Layout>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
