import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home.jsx";
import About from "./Pages/about.jsx";
import Gallery from "./Pages/gallery.jsx";
import Count from "./Pages/count.jsx";
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";

function App() {
  return <>
  <BrowserRouter>
  <Navbar></Navbar>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/gallery" element={<Gallery/>}/>
    <Route path="/count" element={<Count/>}/>
  </Routes>
  <Footer></Footer>
  </BrowserRouter>
  </>
}

export default App;
