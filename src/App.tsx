import Counter from "./components/counter";
import NavBar from "./components/NavBar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./pages/Login";

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
          <Route path="/products" element = {<div>Products</div>} />
          <Route path="/login" element = {<LoginPage/>} />
        </Routes>
      </main>
    </div>
    </Router>
  )
}

export default App
