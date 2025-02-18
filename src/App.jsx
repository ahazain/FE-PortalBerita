import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Advertise from "./pages/Advertise";
import Authors from "./pages/Authors";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/advertise" element={<Advertise />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
