import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Contact from "./pages/contact/Contact.jsx";
import How from "./pages/how/How.jsx";
import Photo from "./pages/photo/Photo.jsx";
import PhotoList from "./pages/photoList/PhotoList.jsx";
import Video from "./pages/video/Video.jsx";
import VideoList from "./pages/videoList/VideoList.jsx";

import Navbar from "./components/Navbar/Navbar.jsx";
import Menu from "./components/menu/Menu.jsx";
// import Backdrop from "./components/menu/Backdrop.jsx";

function App() {
  // const [menuToggle, setMenuToggle] = useState(false);

  return (
    <Router>
      <Navbar />
      {/* <Menu show={menuToggle} close={() => setMenuToggle(false)} /> */}
      {/* <Backdrop show={menuToggle} /> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/how" element={<How />} />
          <Route path="/photos" element={<PhotoList />} />
          <Route path="/photos/:id" element={<Photo />} />
          <Route path="/videos" element={<VideoList />} />
          <Route path="/videos/:id" element={<Video />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
