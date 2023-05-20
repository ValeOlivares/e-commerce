import { BrowserRouter } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Shop from './components/Shop/Shop';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Shop/>
    </BrowserRouter>
  );
};

export default App;
