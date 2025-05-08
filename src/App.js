import { useContext } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { FetchContext } from "./context/FetchContext";

function App() {
  const context = useContext(FetchContext);
  const {getAboutData} = context;
  getAboutData();
  return (
    <div className="App ">
        <Navbar/>
        <Main/>
        <About/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
