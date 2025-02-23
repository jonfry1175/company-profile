import React from "react";
import Service from "./components/Service";
import Home from "./components/Home";
import NavBarCom from "./components/NavBarCom";
import Gallery from "./components/Gallery";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Home />
      {/* content */}
      <NavBarCom />
      <Gallery />
      <Service />
      <Faq />
      {/* content */}
      <Footer />
    </div>
  );
}

export default App;
