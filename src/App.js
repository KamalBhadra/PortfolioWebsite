

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from "./Components/Common/Footer";
import Navbar from "./Components/Common/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import LandingPage from "./Pages/LandingPage";
import Projects from "./Pages/Projects";



function App() {
  return (
    <div className="App">
      <BrowserRouter>  
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
