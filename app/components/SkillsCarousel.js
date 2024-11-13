import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SkillsCarousel = () => {
  const skills = [
    { src: "/img/skills/react.png", title: "React" },
    { src: "/img/skills/bootstrap.png", title: "Bootstrap" },
    { src: "/img/skills/css.png", title: "CSS" },
    { src: "/img/skills/figma.png", title: "Figma" },
    { src: "/img/skills/git.png", title: "Git" },
    { src: "/img/skills/html.png", title: "HTML" },
    { src: "/img/skills/jquery.png", title: "jQuery" },
    { src: "/img/skills/js.png", title: "JavaScript" },
    { src: "/img/skills/mongodb.png", title: "MongoDB" },
    { src: "/img/skills/nextjs.png", title: "Next.js" },
    { src: "/img/skills/npm.png", title: "NPM" },
    { src: "/img/skills/postman.png", title: "Postman" },
    { src: "/img/skills/prettier.png", title: "Prettier" },
    { src: "/img/skills/redux.png", title: "Redux" },
    { src: "/img/skills/sass.png", title: "Sass" },
    { src: "/img/skills/sql.png", title: "SQL" },
    { src: "/img/skills/storybook.png", title: "Storybook" },
    { src: "/img/skills/typescript.png", title: "TypeScript" },
    { src: "/img/skills/webpack.png", title: "Webpack" },
  ]

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
        {skills.map((skill, index) => (
          <div key={index} className="slider-wrapper__part slide">
            <img
              className="slide__img"
              src={skill.src}
              alt={skill.title}
              title={skill.title}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SkillsCarousel
