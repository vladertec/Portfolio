import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SkillsCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800, 
    cssEase: "linear",
    prevArrow: null, 
    nextArrow: null, 
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 4, 
        },
      },
    ],
  }

  return (
    <div className="slider">
      <Slider {...settings} className="slider__container slider-wrapper">
        <div className="slider-wrapper__part slide">
          <img className="slide__img" src="/img/skills/react.png" alt="Adobe" />
        </div>
        <div className="slider-wrapper__part slide">
          <img className="slide__img" src="/img/skills/bootstrap.png" alt="Adobe" />
        </div>
        <div className="slider-wrapper__part slide">
          <img className="slide__img" src="/img/skills/css.png" alt="Adobe" />
        </div>
        <div className="slider-wrapper__part slide">
          <img className="slide__img" src="/img/skills/figma.png" alt="Adobe" />
        </div>
        <div className="slider-wrapper__part slide">
          <img className="slide__img" src="/img/skills/git.png" alt="Adobe" />
        </div>

        <div className="slider-wrapper__part slide">
          <img className="slide__img" src="/img/skills/html.png" alt="Adobe" />
        </div>
        <div className="slider-wrapper__part slide">
          <img className="slide__img" src="/img/skills/jquery.png" alt="Adobe" />
        </div>
        <div className="slider-wrapper__part slide">
          <img className="slide__img" src="/img/skills/js.png" alt="Adobe" />
        </div>
        <div className="slider-wrapper__part slide">
          <img className="slide__img" src="/img/skills/mongodb.png" alt="Adobe" />
        </div>
        <div className="slider-wrapper__part slide">
          <img className="slide__img" src="/img/skills/nextjs.png" alt="Adobe" />
        </div>
        <div className="slider-wrapper__part slide">
          <img className="slide__img" src="/img/skills/npm.png" alt="Adobe" />
        </div>
        <div className="slider-wrapper__part slide">
          <img className="slide__img" src="/img/skills/postman.png" alt="Adobe" />
        </div>

        <div className="slider-wrapper__part slide">
          <img className="slide__img" src="/img/skills/prettier.png" alt="Adobe" />
        </div>
        <div className="slider-wrapper__part slide">
          <img className="slide__img" src="/img/skills/redux.png" alt="Adobe" />
        </div>
        <div className="slider-wrapper__part slide">
          <img className="slide__img" src="/img/skills/sass.png" alt="Adobe" />
        </div>
        <div className="slider-wrapper__part slide">
          <img className="slide__img" src="/img/skills/sql.png" alt="Adobe" />
        </div>
        <div className="slider-wrapper__part slide">
          <img className="slide__img" src="/img/skills/storybook.png" alt="Adobe" />
        </div>
        <div className="slider-wrapper__part slide">
          <img className="slide__img" src="/img/skills/typescript.png" alt="Adobe" />
        </div>
        <div className="slider-wrapper__part slide">
          <img className="slide__img" src="/img/skills/webpack.png" alt="Adobe" />
        </div>

      </Slider>
    </div>
  )
}

export default SkillsCarousel
