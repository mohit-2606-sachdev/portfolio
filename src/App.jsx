import React from "react";
import Navbar from "./components/Navbar";
import Heading from "./components/Heading";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <div>
      <Navbar />
      <Heading />
      <Projects />
      <Technologies />
    </div>
  );
};

export default App;
