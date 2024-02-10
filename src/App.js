import './App.css';
import HomePage from "./Pages/HomePage/HomePage.js";
import BlogPage from './Pages/Blogpage/BlogPage.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Pages/Navbar/navbar.js';
import About from './Pages/About/About.js';
import Footer from './Pages/Footer/Footer.js';
import Contact from './Pages/Contact/Contact.js';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
