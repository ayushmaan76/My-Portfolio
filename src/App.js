import "./App.css";
import React, { useState, useEffect } from "react";
import "./style.css";
import "react-vertical-timeline-component/style.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Preloader from "./Preloader";
import MyNav from "./components/navbar/MyNav";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home_page/HomePage";
import Resume from "./pages/resume_page/ResumePage";
import ProjectPage from "./pages/project_page/ProjectPage";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import About from "./components/aboutme/about/About";
import PersonalSkill from "./components/aboutme/skills/PersonalSkill";
import TechnicalSkill from "./components/aboutme/skills/TechnicalSkill";
import ComingSoon from "./pages/comingsoon_page/comingsoon";
import Notfound from "./pages/blogs_page/notfound";
import SocialMedia from "./components/aboutme/social_media/SocialMedia";
import Toolkit from "./components/aboutme/skills/Toolkit";
import Certificationn from "./components/certificate/Certification";
import Certification from "./pages/certificate_page/CertificatePage"

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 4000); // Set the preloader timeout to 4 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <MyNav />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<About />} />
            <Route path="personalskill" element={<PersonalSkill />} />
            <Route path="technicalskill" element={<TechnicalSkill />} />
            <Route path="socialmedia" element={<SocialMedia />} />
            <Route path="toolkit" element={<Toolkit />} />
          </Route>
          <Route path="/projectspage" element={<ProjectPage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/Certification" element={<Certification />} />
          <Route path="/blogs" element={<ComingSoon />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
