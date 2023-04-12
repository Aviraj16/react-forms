import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import ContactUs from './components/ContactUs/ContactUs';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
