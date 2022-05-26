import Layout from "./components/Layout/Layout";
import NavBar from "./components/Navbar/Navbar";
import List from "./components/List/List";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Layout>
        <List />
      </Layout>
    </div>
  );
}

export default App;
