import Layout from "./components/Layout/Layout";
import NavBar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/List/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Layout>
        <ItemListContainer />
      </Layout>
    </div>
  );
}

export default App;
