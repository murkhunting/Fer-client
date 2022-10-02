import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./app.scss";

import Home from "./pages/home/Home.jsx";
import Contact from "./pages/contact/Contact.jsx";
import How from "./pages/how/How.jsx";
import Info from "./pages/info/Info.jsx";
import Architect from "./pages/architect/Architect.jsx";
import Photo from "./pages/photo/Photo.jsx";
import PhotoList from "./pages/photoList/PhotoList.jsx";
import Video from "./pages/video/Video.jsx";
import VideoList from "./pages/videoList/VideoList.jsx";
import Faqs from "./pages/faqs/Faqs.jsx";


import Admin from "./pages/admin/Admin.jsx";
import Login from "./pages/admin/Login.jsx";
import NewProject from "./pages/admin/NewProject";
import EditProject from "./pages/admin/EditProject";

import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

import { AuthContext } from "./context/auth/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Navbar />
      <div className="content">
        <main className="wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/how" element={<How />} />
            <Route path="/info" element={<Info />} />
            <Route path="/photos" element={<PhotoList />} />
            <Route path="/photos/:id" element={<Photo />} />
            <Route path="/videos" element={<VideoList />} />
            <Route path="/videos/:id" element={<Video />} />
            <Route path="/architect" element={<Architect />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route
              path="/login"
              element={user ? <Navigate to="/admin" /> : <Login />}
            />
            <Route
              path="/admin"
              element={!user ? <Navigate to="/login" /> : <Admin />}
            />
            <Route
              path="/newProject"
              element={!user ? <Navigate to="/login" /> : <NewProject />}
            />
            <Route
              path="/admin/:id"
              element={!user ? <Navigate to="/login" /> : <EditProject />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
