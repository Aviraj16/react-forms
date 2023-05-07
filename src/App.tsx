import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Home from './components/Home/Home';
import Login from './components/Login/Login';

import './App.css';
import Checkout from './components/Checkout/Checkout';
import Register from './components/Register/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
