"use client"

import { useInView } from "react-intersection-observer"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Barbershop Information System",
    image: "/img/barbershop_image.jpg", // Путь к изображению проекта
    description:
      "A comprehensive system for managing barbershop appointments, client records, and staff schedules. It provides an intuitive user interface for clients and powerful admin tools for barbershop owners.",
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Twilio",
      "Docker",
      "Git",
    ],
    role: "Lead Developer – Responsible for the full-stack development, from setting up the database to implementing frontend features and API integration.",
    features: [
      {
        title: "Appointment Scheduling",
        description:
          "Clients can easily book appointments via a calendar interface.",
      },
      {
        title: "Admin Panel",
        description:
          "Barbershop owners can manage appointments, clients, and employee schedules.",
      },
      {
        title: "SMS Notifications",
        description: "SMS reminders sent to clients using Twilio API.",
      },
      {
        title: "Client History",
        description:
          "Clients can view their appointment history and future bookings.",
      },
    ],
    challenges: [
      "Optimizing the database for high performance and fast search queries.",
      "Ensuring secure user authentication with JWT and protecting sensitive data.",
      "Integrating the Twilio API for reliable SMS notifications.",
    ],
    achievements: [
      "Increased customer engagement by 30% due to easy online booking system.",
      "Reduced administrative workload for barbershop owners by automating appointment management.",
    ],
    githubLink: "https://github.com/vladertec/Barbershop_information_system",
  },
  {
    id: 2,
    title: "NaVarti",
    image: "/img/na_varti_image.jpg", // Путь к изображению проекта
    description:
      "NaVarti is a mobile app designed for citizens to report and track public service issues like damaged roads, broken street lights, and garbage collection. It empowers users to communicate directly with local authorities and monitor progress on their reports.",
    technologies: [
      "React Native",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Google Maps API",
      "Socket.IO",
      "Docker",
    ],
    role: "Full Stack Developer – Developed the mobile application and backend, ensuring seamless interaction between users and authorities. Integrated real-time updates and Google Maps for location tracking.",
    features: [
      {
        title: "Issue Reporting",
        description:
          "Users can report issues with photos, descriptions, and locations.",
      },
      {
        title: "Real-Time Updates",
        description:
          "Both users and authorities can track progress on the reported issues.",
      },
      {
        title: "Push Notifications",
        description:
          "Users receive updates when their reported issues are resolved or when actions are taken.",
      },
      {
        title: "Location Tracking",
        description:
          "Integrated with Google Maps to allow users to accurately pin the location of issues.",
      },
    ],
    challenges: [
      "Ensuring real-time updates with Socket.IO for instant notifications and issue tracking.",
      "Optimizing the app's performance for mobile devices, ensuring it works seamlessly on both iOS and Android.",
      "Managing secure user authentication with JWT to protect personal information.",
    ],
    achievements: [
      "Facilitated faster problem resolution by enabling citizens to directly report and track issues.",
      "Reduced time spent on manual communication between citizens and authorities by automating reporting processes.",
    ],
    githubLink: "https://github.com/vladertec/NaVarti",
  },
]

const ProjectDetail = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const { id } = useParams()

  const project = projects.find((p) => p.id.toString() === id)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div ref={ref} className={`project-detail ${inView ? "visible" : ""}`}>
      <h1 className="project-detail__title">{project.title}</h1>
      <div className="project-detail__image-container">
        <Image
          className="project-detail__image"
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
        />
      </div>
      <p className="project-detail__description">{project.description}</p>

      <h3 className="project-detail__subtitle">Technologies Used:</h3>
      <ul className="project-detail__tech-list">
        {project.technologies.map((tech, index) => (
          <li key={index} className="project-detail__tech-item">
            {tech}
          </li>
        ))}
      </ul>

      <h3 className="project-detail__subtitle">My Role:</h3>
      <p className="project-detail__role">{project.role}</p>

      <h3 className="project-detail__subtitle">Key Features:</h3>
      <ul className="project-detail__features-list">
        {project.features.map((feature, index) => (
          <li key={index} className="project-detail__feature-item">
            <strong>{feature.title}</strong>: {feature.description}
          </li>
        ))}
      </ul>

      <h3 className="project-detail__subtitle">Challenges & Solutions:</h3>
      <ul className="project-detail__challenges-list">
        {project.challenges.map((challenge, index) => (
          <li key={index} className="project-detail__challenge-item">
            {challenge}
          </li>
        ))}
      </ul>

      <h3 className="project-detail__subtitle">Achievements:</h3>
      <ul className="project-detail__achievements-list">
        {project.achievements.map((achievement, index) => (
          <li key={index} className="project-detail__achievement-item">
            {achievement}
          </li>
        ))}
      </ul>

      <Link href={project.githubLink} className="project-detail__link">
        View on GitHub
      </Link>
    </div>
  )
}

export default ProjectDetail


