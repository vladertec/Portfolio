import { useInView } from "react-intersection-observer"

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <div ref={ref} className={`about ${inView ? "visible" : ""}`}>
      <h2 className="about__title">ABOUT</h2>
      <p className="about__name">
        Building intuitive interfaces that connect people with technology
      </p>
      <p className="about__information about__information-computer">
        As a recent graduate with a Master's degree in Information Technology, I
        am eager to begin my career as a frontend developer in the IT field. My
        academic journey has equipped me with a solid foundation in frontend
        development, particularly in creating visually appealing and
        user-friendly interfaces using HTML, CSS, JavaScript/TypeScript, and
        React. I am committed to enhancing my technical skills and gaining
        practical experience within a dynamic company. Known for my strong
        communication skills and teamwork abilities, I thrive in collaborative
        environments where diverse ideas are valued. My motivation for personal
        growth drives me to continuously seek knowledge and improve my skill
        set.
      </p>

      <p className="about__information about__information-mobile">
        As a recent Master's graduate in Information Technology, I am eager to
        start my career as a frontend developer. My studies have provided a
        strong foundation in frontend technologies, including HTML, CSS,
        JavaScript/TypeScript, and React, enabling me to create visually
        appealing and user-friendly interfaces. I am committed to enhancing my
        skills and gaining practical experience in a dynamic company. With
        strong communication and teamwork abilities, I thrive in collaborative
        environments and am motivated to continuously learn and grow.
      </p>

      <p className="about__information">
        I am excited about the opportunity to contribute to an innovative
        organization that fosters professional development. I look forward to
        leveraging my skills to create impactful digital solutions and help your
        team achieve its goals.
      </p>
    </div>
  )
}

export default About
