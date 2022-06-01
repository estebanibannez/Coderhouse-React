import Layout from './components/Layout/Layout';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/List/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <Layout>
        <ItemListContainer />
      </Layout>
    </>
  );
}

export default App;
