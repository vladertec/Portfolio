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
        With hands-on experience in frontend development and a strong foundation
        in modern web technologies, I specialize in creating seamless user
        experiences. My work spans multiple projects where I successfully
        implemented dynamic, responsive designs using HTML, CSS,
        JavaScript/TypeScript, and React, ensuring optimal performance and
        accessibility. My practical skills go beyond the basics, encompassing
        detailed knowledge of responsive layouts, animations, and clean,
        maintainable code.
      </p>

      <p className="about__information about__information-mobile">
        I’m committed to ongoing professional growth and staying updated with
        the latest web standards and development practices. Known for my
        problem-solving abilities and keen attention to detail, I focus on
        delivering solutions that meet client expectations and enhance user
        engagement. In collaborative environments, I value diverse perspectives
        and foster open communication to drive project success.
      </p>

      <p className="about__information" id="education">
        I look forward to contributing to an innovative team, bringing my
        passion for frontend development and my dedication to quality and
        efficiency. By leveraging my skills in cutting-edge web technologies, I
        aim to make a meaningful impact and support your team's goals in
        delivering exceptional digital experiences.
      </p>
    </div>
  )
}

export default About
