import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Stacks from './components/Stacks'
import About from "./components/About";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Contact from './components/Contact'
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLinkedin } from 'react-icons/fa';
import { useEffect } from "react";
import mainImg from '../src/assets/Untitled.jpg';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      easing: "ease-in-out",
      once: true,   // animate only once
    });
  }, []);
  return (
    <div className="w-screen min-h-screen flex flex-col bg-main dark:text-white">
      {/* Navbar always on top */}
      <Navbar />

      {/* Page Content (expands in the middle) */}
      <main className="p-6 flex flex-col h-[400px] m-5">
        <div id="home" className="w-full flex flex-row items-center">
          <div className="left flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4">I am Arkodev Mukherjee</h1>
            <p className="text-lg">I know html,css,javascript,react</p>
            <span className="container text-blue-500 rounded-lg w-10 h-10 flex items-center justify-center">
              <FaLinkedin className="w-6 h-6" />
            </span>

            <button className="bg-yellow p-2 w-40 hover:bg-main hover:border-yellow hover:border-1 hover:text-white transition-all duration-1000 rounded-lg mt-5 text-violet">
              Download Resume
            </button>
          </div>
          <div id="right" className="right ml-auto hidden md:block">
            <img src={mainImg} alt="Main visual" className="w-[400px] h-[400px] rounded-[50%] object-cover" />
          </div>
        </div>
      </main>

      <About />

      <Projects />
      <Stacks />

      <Contact />

      {/* Footer always at the bottom */}
      <Footer />
    </div>
  )
}

export default App