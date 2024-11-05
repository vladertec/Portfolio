import { useInView } from "react-intersection-observer"

const Footer = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <div ref={ref} className={`footer ${inView ? "visible" : ""}`}>
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
