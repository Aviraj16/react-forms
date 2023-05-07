import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Home from './components/Home/Home';
import Login from './components/Login/Login';

import './App.css';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
