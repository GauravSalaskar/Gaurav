import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './About';
import Product from './Component/Product';
import Productd from './Component/Productd';
import ContactUs from './Component/ContactUs';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from './Component/Footer';
function App() {
  return (

    <Router>
      <Navbar />
      

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Product' element={<Product />}></Route>
        <Route path='/Productd' element={<Productd />}></Route>
        <Route path='/ContactUs' element={<ContactUs />}></Route>

      </Routes>
      <Footer />

    </Router>

  );
}

export default App;
