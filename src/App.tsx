import Counter from "./components/counter";
import NavBar from "./components/NavBar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./pages/Login";
import ListProductsPage from "./pages/ListProducts";
import EditProduct from "./pages/EditProduct";

function App() {

  return (
    <Router>
    <div className="container">
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element = {<Counter initCount={5}/>} />
          <Route path="/products" element = {<ListProductsPage/>} />
          <Route path="/login" element = {<LoginPage/>} />
          <Route path="/products/:id" element = {<EditProduct/>} />
        </Routes>
      </main>
    </div>
    </Router>
  )
}

export default App
