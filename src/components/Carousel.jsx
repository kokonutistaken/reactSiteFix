import React, {useState} from "react";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"

import "./Carousel.css"

export const Carousel=({data})=>{

    const  [slide, setSlide] = useState(0);

    const titlesAndText = [
        {
          title: "Javan Rhino",
          text: "Less than 80 left in the world",
        },
        {
          title: "Amur Leopard",
          text: "Less than 100 left in the world",
        },
        {
          title: "Mountain Gorillas",
          text: "Less than 1000 left in the world",
        },
        {
          title: "African Forest Elephant",
          text: "50% died in the last 12 years",
        },
        {
          title: "Tapanuli Orangutan",
          text: "Less than 800 left in the world",
        },
      ];

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    }

    return <div className="carousel">
        <div className="overlay">
        <h3 className={`title${slide + 1}`}>{titlesAndText[slide].title}</h3>
        <p className={`txt${slide + 1}`}>{titlesAndText[slide].text}</p>
        </div> 
        <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>
        {data.map((item, idx) => {
        return( 
        <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? "slide" : "slide slide-hidden"} />
       
    )})}
    <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>
    <span className="indicators">
        {data.map((_, idx) => {
            return <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? "indicator" : "indicator indicator-inactive"}></button>        })}
    </span>
    </div>
        
}
