import './App.css';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Products from './pages/products/Products';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"




function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element= {<Home/>} ></Route> 
      <Route exact path="/cart" element={<Cart/>}></Route>
      <Route exact path="/product/:id" element={<Products/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
