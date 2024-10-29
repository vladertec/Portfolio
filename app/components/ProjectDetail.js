import { useRouter } from "next/router"
import Image from "next/image"
import Link from "next/link"

const ProjectDetail = () => {
  const router = useRouter()
  const { id } = router.query

  const projectData = {
    1: {
      title: "Project One",
      description: "Description of Project One. This project is about...",
      images: [
        "/img/project1a.jpg",
        "/img/project1b.jpg",
        "/img/project1c.jpg",
      ],
      link: "https://example.com/project-one",
    },
    2: {
      title: "Project Two",
      description: "Description of Project Two. This project focuses on...",
      images: [
        "/img/project2a.jpg",
        "/img/project2b.jpg",
        "/img/project2c.jpg",
      ],
      link: "https://example.com/project-two",
    },
  }

  const project = projectData[id]

  if (!project) return <p>Loading...</p>

  return (
    <div className={styles.projectDetail}>
      <h1 className={styles.projectTitle}>{project.title}</h1>
      <div className={styles.projectImages}>
        {project.images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Image of ${project.title}`}
            width={500}
            height={300}
            className={styles.projectImage}
          />
        ))}
      </div>
      <p className={styles.projectDescription}>{project.description}</p>
      <Link href={project.link} className={styles.projectLink}>
        View Project
      </Link>
    </div>
  )
}

export default ProjectDetail
