import Link from "next/link"; // Import Link for navigation

const Portfolio = () => {
  const projects = [
    { id: 1, title: "Project One", image: "/img/project1.jpg" },
    { id: 2, title: "Project Two", image: "/img/project2.jpg" },
    { id: 3, title: "Project Three", image: "/img/project3.jpg" },
    { id: 4, title: "Project Four", image: "/img/project4.jpg" }, // Add more projects as needed
  ];

  return (
    <div className="portfolio">
      <p className="portfolio__title">PORTFOLIO</p>
      <h2 className="portfolio__text">Featured Projects</h2>
      <div className="portfolio__projects">
        {projects.map((project) => (
          <Link href={`/projects/${project.id}`} key={project.id}>
            <div className="portfolio__project">
              <img src={project.image} alt={project.title} className="project__img" />
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
