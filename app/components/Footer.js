import { useInView } from "react-intersection-observer"

const Footer = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <div ref={ref} className={`footer ${inView ? "visible" : ""}`}>
      <div className="footer__nav">
        <a href="#intro" className="footer__link">
          INTRO
        </a>
        <p className="footer__link">|</p>
        <a href="#about" className="footer__link">
          ABOUT
        </a>
        <p className="footer__link">|</p>
        <a href="#education" className="footer__link">
          EDUCATION
        </a>
        <p className="footer__link">|</p>
        <a href="#skills" className="footer__link">
          SKILLS
        </a>
      </div>
      <p className="footer__text">
        Copyright © 2024 portfolio website by{" "}
        <a
          className="footer__name"
          href="https://www.linkedin.com/in/vladertec/"
        >
          Vladertec
        </a>
      </p>
    </div>
  )
}

export default Footer
