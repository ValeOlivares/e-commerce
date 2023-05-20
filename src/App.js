import { BrowserRouter } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home';

import './main.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Home/>
    </BrowserRouter>
  );
};

export default App;
