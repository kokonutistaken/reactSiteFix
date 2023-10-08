import './App.css';
import React, { useState, useEffect } from 'react';
import vid from "./wildlifeVid.mov"
import leaf from "./leaf.svg"
import { Carousel } from './components/Carousel';
// Import the JSON data as a default import
import CarouselData from "./CarouselData.json";
import bgMusic from "./bgMusic.mp3"

// Access the 'slides' property from the imported object
const slides = CarouselData.slides;

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [animateOnScroll, setAnimateOnScroll] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const startMusic = () => {
    const audio = document.querySelector('audio');
    const enterSite = document.querySelector(".enterSite")
    const fasolidfaplay = document.querySelector(".fa-solid.fa-play")
    const circle = document.querySelector(".circle")
    if (audio) {
      audio.play();
      fasolidfaplay.style.display = "none";
      circle.style.display = "none";
      enterSite.classList.add("pulse")
      
  
      // Add a delay before playing the audio
      setTimeout(() => {
        enterSite.style.display = "none";
        enterSite.classList.remove("pulse")
      }, 4000); // Adjust the delay time (in milliseconds) as needed
    }
  }

  useEffect(() => {
    // Add a scroll event listener to trigger the animation
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Adjust the scroll position threshold based on your design
      const scrollThreshold = 100;
      if (scrollY > scrollThreshold) {
        setAnimateOnScroll(true);
      } else {
        setAnimateOnScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Define a class name to apply the animation
  const sidebarClass = `sideBar ${isSidebarOpen ? 'opening' : 'closing'} ${animateOnScroll ? 'animate' : ''}`;

  return (
    <div className="App">
      <div className="mainPage">
      <video src={vid} autoPlay loop muted></video>
        <h1>NaturaSave</h1>
        <img src={leaf} className='leafImg'></img>
        
        <i className="fa-solid fa-bars" onClick={toggleSidebar}></i>
        <div className={sidebarClass}>
          <h3 className='barreTitre' style={{ display: isSidebarOpen ? 'block' : 'none' }}>Products:</h3>
          <a href="#page2">
            <span className='text1' style={{ display: isSidebarOpen ? 'block' : 'none' }}>1</span>
          </a>
          <a>
            <span className='text2' style={{ display: isSidebarOpen ? 'block' : 'none' }}>2</span>
          </a>
          <a>
            <span className='text3' style={{ display: isSidebarOpen ? 'block' : 'none' }}>3</span>
          </a>
          <a>
            <span className='text4' style={{ display: isSidebarOpen ? 'block' : 'none' }}>4</span>
          </a>
        </div>
        <div className="enTete">
        
        </div>
      </div>
      <div className="page2" id='page2'>
        <h4>"If you aren't trying to save the nature you're trolling"</h4>
        <p className='quoteTxt'> Sadownik Konrad - 1686</p>
        
      </div>
      <div className="page3" id='page3' >
        
        <div className='box1'>
          <Carousel data={slides}/>
          <div className='box2'></div>
          
        </div>
        
        
      </div>
      <audio src={bgMusic} loop></audio>
      <div className='enterSite'>
        <i className="fa-solid fa-play"></i>
        <svg onClick={startMusic} className="circle"height="120" width="120">
          <circle cx="60" cy="60" r="50" stroke="white" strokeWidth="3" fill="none" />
        </svg> 
      </div>
    </div>
  );
}

export default App;