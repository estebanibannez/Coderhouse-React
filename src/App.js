import { Box } from '@chakra-ui/react';
import Layout from './components/Layout/Layout';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/List/ItemListContainer';

function App() {
  return (
    <Box ml={{ base: 0, md: 0 }}>
      <NavBar />
      <Layout>
        <ItemListContainer />
      </Layout>
    </Box>
  );
}

export default App;
