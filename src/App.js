import Layout from './components/Layout/Layout';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/List/ItemListContainer';
import ItemDetailContainer from './components/List/ItemDetailContainer';

function App() {
  return (
    <>
      <NavBar />
      <Layout>
        <ItemListContainer />
      </Layout>

      <ItemDetailContainer />
    </>
  );
}

export default App;
