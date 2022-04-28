import Home from "./Components/Home/Home";
import Store from "./Components/Store/Store";
import { Routes, Route } from 'react-router-dom'
import Iphone from "./Components/Iphone/Iphone";
import Ipad from "./Components/Ipad/Ipad";
import Macbook from "./Components/Macbook/Macbook";
import Accessories from "./Components/Accessories/Accessories";
import Cart from "./Components/Cart/Cart";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/ipad" element={<Ipad />} />
        <Route path="/macbook" element={<Macbook />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>

    </>
  );
}

export default App;
