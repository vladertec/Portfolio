import { useInView } from "react-intersection-observer"

const Education = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <div ref={ref} className={`education ${inView ? "visible" : ""}`}>
      <h2 className="education__title">EDUCATION</h2>
      <h2 className="education__text">University & Course</h2>
      <div className="education__container education-wrapper">
        <p className="education-wrapper__title">October 2023 — March 2024</p>
        <p className="education-wrapper__text">
          Folkuniversitetet Course, Learning Swedish language, developing
          professional skills, and adapting to the Swedish job market, Västerås.
        </p>
      </div>
      <div className="education__container education-wrapper">
        <p className="education-wrapper__title">
          September 2022 — February 2024
        </p>
        <p className="education-wrapper__text">
          Master’s degree, National Technical University of Ukraine “Igor
          Sikorsky Kyiv Polytechnic Institute” Faculty of Informatics and
          Computer Science, Kyiv.
        </p>
      </div>
      <div className="education__container education-wrapper">
        <p className="education-wrapper__title">August 2021 — October 2022</p>
        <p className="education-wrapper__text">
          Comprehensive Frontend development program (also with Backend
          elements), reputable educational school DAN.IT, Kyiv.
        </p>
      </div>
      <div className="education__container education-wrapper">
        <p className="education-wrapper__title">September 2018 — June 2022</p>
        <p className="education-wrapper__text">
          Bachelor's degree, National Technical University of Ukraine “Igor
          Sikorsky Kyiv Polytechnic Institute” Faculty of Informatics and
          Computer Science, Kyiv.
        </p>
      </div>
    </div>
  )
}

export default Education
