import Link from "next/link";
import { useInView } from "react-intersection-observer";

const Portfolio = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = [
    { id: 1, title: "Project One", image: "/img/personal_photo.jpg" },
    { id: 2, title: "Project Two", image: "/img/personal_photo.jpg" },
  ];

  return (
    <div ref={ref} className={`portfolio ${inView ? "visible" : ""}`}>
      <p className="portfolio__title">PORTFOLIO</p>
      <h2 className="portfolio__text">Recent Highlighted Projects</h2>
      <div className="portfolio__projects">
        {projects.map((project) => (
          <Link href={`/projects/${project.id}`} key={project.id}>
            <div className="portfolio__project">
              <img
                src={project.image}
                alt={project.title}
                className="project__img"
              />
              <div className="project__overlay">
                <span className="project__title">{project.title}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
