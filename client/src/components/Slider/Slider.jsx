import React, { useState } from 'react';
import './Slider.scss';

// Material UI icons
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

// create Slider for the homepage from plain Javascript
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    'https://images.pexels.com/photos/8945143/pexels-photo-8945143.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/6220408/pexels-photo-6220408.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/3062592/pexels-photo-3062592.jpeg?auto=compress&cs=tinysrgb&w=1600',
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>

      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>

        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
