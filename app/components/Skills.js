import SkillsCarousel from "./SkillsCarousel"
import { useInView } from "react-intersection-observer"

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <div ref={ref} className={`skills ${inView ? "visible" : ""}`}>
      <p className="skills__title">SKILLS</p>
      <h2 className="skills__text">My skills and knowledge</h2>
      {/* <SkillsCarousel className="skills__carousel" /> */}
    </div>
  )
}

export default Skills
