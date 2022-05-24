import Layout from "./components/Layout";
import NavBar from "./components/Navbar";
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Layout>
        <Card />
      </Layout>
    </div>
  );
}

export default App;
