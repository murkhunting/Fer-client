import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.scss";

import Home from "./pages/home/Home.jsx";
import Contact from "./pages/contact/Contact.jsx";
import How from "./pages/how/How.jsx";
import Photo from "./pages/photo/Photo.jsx";
import PhotoList from "./pages/photoList/PhotoList.jsx";
import Video from "./pages/video/Video.jsx";
import VideoList from "./pages/videoList/VideoList.jsx";
import Admin from "./pages/admin/Admin.jsx";
import Login from "./pages/admin/Login.jsx";

import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  const user = false;
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/how" element={<How />} />
          <Route path="/photos" element={<PhotoList />} />
          <Route path="/photos/:id" element={<Photo />} />
          <Route path="/videos" element={<VideoList />} />
          <Route path="/videos/:id" element={<Video />} />
          <Route path="/admin" element={user ? <Admin /> : <Login />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
