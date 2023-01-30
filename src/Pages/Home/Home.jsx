import React from "react";
import Content from "../../Components/Content";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

const Home = () => {
  return (
    <div key='' className="min-h-screen flex flex-col">
      <Navbar/>
      <Content/>
    <div key='' className="mt-auto">
      <Footer/>
      </div>
    </div>
  );
};

export default Home;
