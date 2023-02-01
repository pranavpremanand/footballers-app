import React from "react";
import Content from "../../Components/Content";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

const Home = () => {
  return (
    <div key='' className="min-h-screen max-w-screen flex flex-col" style={{backgroundImage:`url("https://pbs.twimg.com/media/FVPNQbOWYAEzDfn?format=jpg&name=4096x4096")`,backgroundPosition: "center",backgroundSize:'cover'}}>
      <div>
      <Navbar/>
      <Content/>
      </div>
    <div key='' className="h-1/6 mt-auto">
      <Footer/>
      </div>
    </div>
  );
};

export default Home;
