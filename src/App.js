import React from "react";
import "./index.css";
import Home from "./routes/home";
import Project from "./routes/project";
import About from "./routes/about";
import Contact from "./routes/contact";
import Skills from "./routes/skills";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Project" element={<Project />}/>
          <Route path="/Skills" element={<Skills />}/>
          <Route path="/Contact" element={<Contact />}/>

      </Routes>
    </>
  );
}

export default App;
