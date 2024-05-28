import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image1 from "../../assets/slider-1.jpg";
import Image2 from "../../assets/slider-2.jpg";
import Image3 from "../../assets/slider-3.jpg";
import Image4 from "../../assets/slider-4.jpg";
import "./home1.css";

function Home1() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,  
    autoplaySpeed: 5000, 
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
          dots: true,
          arrows: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
          dots: true,
          arrows: true,
        }
      }
    ]
  };

  return (
    <div className="bg-custom-gradient flex justify-center items-start w-full lg:h-[800px] sm:h-[900px]  mt-[50px]">
      <div className="lg:w-[800px] md:h-[800px] sm:w-full sm:h-auto w-full h-auto px-2 pt-10 pb-16 mt-[50px]">
        <Slider {...settings}>
          <div className="flex justify-center">
            <img src={Image1} alt="Slide 1" className="slider-image object-cover rounded-xl w-full md:h-[700px] h-[600px]" />
          </div>
          <div className="flex justify-center">
            <img src={Image2} alt="Slide 2" className="slider-image object-cover rounded-xl w-full md:h-[700px] h-[600px]" />
          </div>
          <div className="flex justify-center">
            <img src={Image3} alt="Slide 3" className="slider-image object-cover rounded-xl w-full md:h-[700px] h-[600px]" />
          </div>
          <div className="flex justify-center">
            <img src={Image4} alt="Slide 4" className="slider-image object-cover rounded-xl w-full md:h-[700px] h-[600px]" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Home1;
