import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SkillsCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
    cssEase: "linear",
    prevArrow: null, 
    nextArrow: null, 
    // responsive: [
    //   {
    //     breakpoint: 750,
    //     settings: {
    //       slidesToShow: 2, 
    //     },
    //   },
    // ],
  }

  return (
    <div className="slider">
      <Slider {...settings} className="slider__container slider-wrapper">
        <div className="slider-wrapper__part slide">
          <img className="slide__img" src="/img/personal_photo.jpg" alt="Adobe" />
        </div>
        <div className="slider-wrapper__part slide">
          <img className="slide__img" src="/img/personal_photo.jpg" alt="Adobe" />
        </div>
        <div className="slider-wrapper__part slide">
          <img className="slide__img" src="/img/personal_photo.jpg" alt="Adobe" />
        </div>
        <div className="slider-wrapper__part slide">
          <img className="slide__img" src="/img/personal_photo.jpg" alt="Adobe" />
        </div>
        <div className="slider-wrapper__part slide">
          <img className="slide__img" src="/img/personal_photo.jpg" alt="Adobe" />
        </div>
      </Slider>
    </div>
  )
}

export default SkillsCarousel
