import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import WealthCreation from "./components/solutions/WealthCreation";
import WealthProtection from "./components/solutions/WealthProtection";
import PortfolioConsultant from "./components/solutions/PortfolioConsultant";
import WealthManagement from "./components/solutions/WealthManagement";
// import LuxuryCursor from "./components/LuxuryCursor";


const App = () => {
  return (
    <>
    {/* <LuxuryCursor/> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About/>} />
        <Route path="/solutions/wealth-creation" element={<WealthCreation />} />
        <Route path="/solutions/wealth-protection" element={<WealthProtection />} />
        <Route path="/solutions/portfolio-consultant" element={<PortfolioConsultant />} />
        <Route path="/solutions/wealth-management" element={<WealthManagement />} />
      </Routes>

      <Footer/>
    </>
  );
};

export default App;