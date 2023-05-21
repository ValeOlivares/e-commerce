import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

import './main.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <ShoppingCart/>
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/checkout' element={< Checkout />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
