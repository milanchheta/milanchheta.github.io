import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import AboutMe from "../AboutMe/AboutMe";
import Resume from "../Resume/Resume";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import "./Main.css";
function Main() {
  return (
    <div className="Main">
      <Navbar />
      <Home />
      <AboutMe />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Main;
