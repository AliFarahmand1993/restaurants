import React from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import HeadLineCards from "./Component/HeadLineCards";
import Foods from "./Component/Foods";
import Category from "./Component/Category";
import Footer from "./Component/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadLineCards />
      <Foods />
      <Category />
      <Footer />
    </div>
  );
}

export default App;
