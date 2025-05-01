import Navbar from "./components/navbar.js";
import Profile from "./components/profile.js";
import About from "./components/about.js";
import Skills from "./components/skills.js";
import Project from "./components/project.js";
import CoursesAndCertifications from "./components/courses_and_certifications.js";
import Contact from "./components/contact.js";
import FooterContact from "./components/footercontact.js";

function App() {
    return (
      <>
          <Navbar/>
          <Profile/>
          <About/>
          <Project/>
          <Skills/>
          <CoursesAndCertifications/>
          <Contact/>
          <FooterContact/>
      </>
    );
};

export default App;
