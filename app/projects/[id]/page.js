"use client"

import { useInView } from "react-intersection-observer"
import { useParams } from "next/navigation"
import Link from "next/link"
import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const projects = [
  {
    id: 1,
    title: "Barbershop Information System",
    projectImages: [
      { src: "/img/project_1/1.png", alt: "Project Image 1" },
      { src: "/img/project_1/2.png", alt: "Project Image 2" },
      { src: "/img/project_1/3.png", alt: "Project Image 3" },
      { src: "/img/project_1/4.png", alt: "Project Image 4" },
      { src: "/img/project_1/5.png", alt: "Project Image 5" },
      { src: "/img/project_1/6.png", alt: "Project Image 6" },
      { src: "/img/project_1/7.png", alt: "Project Image 7" },
      { src: "/img/project_1/8.png", alt: "Project Image 8" },
      { src: "/img/project_1/9.png", alt: "Project Image 9" },
      { src: "/img/project_1/10.png", alt: "Project Image 10" },
      { src: "/img/project_1/11.png", alt: "Project Image 11" },
      { src: "/img/project_1/12.png", alt: "Project Image 12" },
      { src: "/img/project_1/13.png", alt: "Project Image 13" },
      { src: "/img/project_1/14.png", alt: "Project Image 14" },
      { src: "/img/project_1/15.png", alt: "Project Image 15" },
      { src: "/img/project_1/16.png", alt: "Project Image 16" },
    ],
    description: [
      "This project is a Barber Shop Information System built using the MERN stack (MongoDB, Express, React, Node.js). It provides a seamless and comprehensive experience for clients, barbers, and managers. The system includes a range of essential features tailored for a modern barber shop, such as client registration, allowing new customers to join the database and access personalized services.",
      "For security, client authorization enables customers to view their booking history, manage purchases, and update favorite items. Managers can add new barbers and maintain control over all barber-related records. Clients can easily book appointments, choosing their preferred service, barber, date, and time, along with a streamlined online purchase option for various barber shop products. Only authorized managers can share news and promotional content, helping keep clients updated on the latest offerings.",
      "The system also supports client feedback, allowing managers to respond and make adjustments based on customer suggestions. Barbers can view their upcoming schedules, and clients have the option to manage favorites or cancel appointments as needed. Managers can monitor all appointments and analyze service popularity to optimize scheduling, while also tracking sales data to refine the inventory. For added engagement, managers can send promotional campaigns directly to clients, creating an efficient, user-friendly, and well-rounded experience for everyone involved in the barber shop.",
    ],
    technologies: [
      { name: "React", link: "https://reactjs.org/" },
      { name: "Redux", link: "https://redux.js.org/" },
      { name: "React Router", link: "https://reactrouter.com/" },
      { name: "Material-UI (MUI)", link: "https://mui.com/" },
      { name: "Axios", link: "https://axios-http.com/" },
      { name: "Formik", link: "https://formik.org/" },
      { name: "Yup", link: "https://github.com/jquense/yup" },
      { name: "Jest", link: "https://jestjs.io/" },
      { name: "Slick Carousel", link: "https://react-slick.neostack.com/" },
      { name: "Express", link: "https://expressjs.com/" },
      { name: "Node.js", link: "https://nodejs.org/" },
      { name: "MongoDB", link: "https://www.mongodb.com/" },
      { name: "JWT", link: "https://jwt.io/" },
      {
        name: "React Icons",
        link: "https://react-icons.github.io/react-icons/",
      },
      {
        name: "React Scroll To Top",
        link: "https://www.npmjs.com/package/react-scroll-to-top",
      },
      { name: "Swiper", link: "https://swiperjs.com/" },
      { name: "Lodash", link: "https://lodash.com/" },
      { name: "NPM", link: "https://www.npmjs.com/" },
      { name: "EmailJS", link: "https://www.emailjs.com/" },
      { name: "ESLint", link: "https://eslint.org/" },
      { name: "Prettier", link: "https://prettier.io/" },
      { name: "Mongoose", link: "https://mongoosejs.com/" },
      { name: "Sass", link: "https://sass-lang.com/" },
      { name: "Figma", link: "https://www.figma.com/" },
    ],
    role: "Lead Developer – as a Full-Stack Developer, I am responsible for both the frontend and backend development of the project. This includes setting up and managing the non-relational database, implementing server-side logic, and ensuring efficient API integrations. On the frontend, I work with modern technologies like React, Redux, and Material-UI to build responsive and dynamic user interfaces. I also handle data storage and retrieval with MongoDB, ensuring that the backend efficiently interacts with the database for optimal performance and scalability. Additionally, I focus on ensuring smooth user authentication, implementing secure token-based systems with JWT, and optimizing the overall system for both functionality and performance.",
    features: [
      {
        title: "Client Registration",
        description:
          "clients can easily register by providing basic information, enabling them to join the barbershop's database and access tailored services like booking appointments and receiving notifications.",
      },
      {
        title: "Authorization",
        description:
          "secure login ensures only authorized users access the system, allowing clients to track their appointments, manage their cart, and save favorite products for future visits.",
      },
      {
        title: "Barber Registration",
        description:
          "after authorization, only managers have the privilege to add new barbers to the system, assigning them to services and keeping their information up-to-date.",
      },
      {
        title: "Appointment Scheduling",
        description:
          "clients can easily book appointments online, selecting services, preferred barbers, and times, streamlining the booking process and offering flexibility in scheduling.",
      },
      {
        title: "Product Sales",
        description:
          "clients can browse and purchase a variety of grooming products, providing their personal details, delivery address, and payment method to complete secure transactions.",
      },
      {
        title: "News Updates",
        description:
          "managers can post news, such as promotions or new services, directly on the platform, ensuring clients stay informed about the latest offerings in the barbershop.",
      },
      {
        title: "Feedback",
        description:
          "clients can leave feedback through a dedicated form, allowing managers to review suggestions and improve services based on customer input.",
      },
      {
        title: "Barber's Schedule",
        description:
          "barbers can view and manage their appointments directly from their personal dashboard, ensuring they stay organized and prepared for upcoming sessions.",
      },
      {
        title: "Information Update",
        description:
          "clients and barbers can easily update their personal details, including contact information and preferences, keeping profiles current for better service.",
      },
      {
        title: "Favorites",
        description:
          "clients can save products or services they like to their favorites section, making it quicker and easier to access their preferred choices when booking appointments or shopping.",
      },
      {
        title: "Appointment Cancellation",
        description:
          "clients have the option to cancel or reschedule appointments through their dashboard, providing flexibility and reducing no-shows.",
      },
      {
        title: "Online Appointment Management",
        description:
          "managers can oversee all appointments, adjusting schedules based on service popularity and barber availability, helping optimize business operations.",
      },
      {
        title: "Sales Analytics",
        description:
          "managers can access detailed analytics on client orders and product sales, aiding in inventory management and helping refine product offerings and sales strategies.",
      },
      {
        title: "Client Notifications",
        description:
          "managers can send targeted notifications, such as promotions, news, or updates, keeping clients engaged and informed about relevant activities at the barbershop.",
      },
    ],
    featuresMobile: [
      {
        title: "Client Registration",
        description:
          "clients register to join the database and access bookings, updates, and personalized services.",
      },
      {
        title: "Authorization",
        description:
          "secure login grants clients access to track appointments, manage cart, and save favorites.",
      },
      {
        title: "Barber Registration",
        description:
          "only managers can register new barbers, assigning them to services.",
      },
      {
        title: "Appointment Scheduling",
        description:
          "clients book appointments by choosing service, barber, and available time online.",
      },
      {
        title: "Product Sales",
        description:
          "clients browse and buy grooming products, with secure payment and delivery options.",
      },
      {
        title: "News Updates",
        description:
          "managers share news and promotions, keeping clients informed about offers.",
      },
      {
        title: "Feedback",
        description:
          "clients provide feedback, which managers review to improve services.",
      },
      {
        title: "Barber's Schedule",
        description:
          "barbers check their schedules and appointment details on their dashboard.",
      },
      {
        title: "Information Update",
        description:
          "easy profile updates for clients and barbers to keep information current.",
      },
      {
        title: "Favorites",
        description:
          "clients save preferred products and services to a favorites section.",
      },
      {
        title: "Appointment Cancellation",
        description:
          "clients can cancel or reschedule appointments for added flexibility.",
      },
      {
        title: "Online Appointment Management",
        description:
          "managers organize bookings, adjusting based on service popularity.",
      },
      {
        title: "Sales Analytics",
        description:
          "managers view detailed sales and client order reports for inventory insights.",
      },
      {
        title: "Client Notifications",
        description:
          "managers send promotions and updates, keeping clients engaged.",
      },
    ],

    achievements: [
      "Increased customer engagement by 30% due to the easy-to-use online booking system, making it convenient for clients to schedule their appointments at any time.",
      "Reduced administrative workload for barbershop owners by automating appointment management, allowing them to focus on customer service and other business aspects.",
      "Modern and minimalist design that ensures a visually appealing and intuitive user experience, contributing to a professional and welcoming atmosphere for clients.",
      "Enhanced system speed and scalability, ensuring smooth operation even as the number of clients and bookings grows, and providing a robust foundation for future expansion.",
      "A content-rich homepage that provides visitors with all the essential information they need about the barbershop's services, promotions, and updates at a glance.",
      "User-friendly and simple interface that caters to both tech-savvy users and those with limited digital experience, ensuring ease of navigation across all sections of the site.",
      "Integrated automation mechanisms for service booking and product purchasing, reducing the time clients spend on administrative tasks and improving overall customer satisfaction.",
      "User authentication for clients, barbers, and managers, ensuring a secure system where each user type has appropriate access to features and information relevant to their role.",
      "Detailed information about each service offered, including descriptions, pricing, and time estimates, helping clients make informed decisions when booking appointments.",
      "A comprehensive photo gallery showcasing the barbershop's work process and hairstyles, allowing clients to view the quality of services before making their choice.",
      "News and updates section that informs clients about the latest trends in the beauty industry, barbershop promotions, and any new services or products available.",
      "Possibility for clients to purchase specialized grooming products directly through the platform, providing a convenient and seamless shopping experience.",
      "Responsiveness and mobile-friendliness, ensuring that the website delivers a seamless experience across different devices, making it accessible and easy to use on smartphones and tablets.",
    ],

    achievementsMobile: [
      "Increased customer engagement by 30% with a simple online booking system for convenient scheduling.",
      "Reduced admin tasks for barbershop owners by automating appointment management, focusing efforts on service.",
      "Modern design provides an intuitive and appealing user experience for a professional, welcoming feel.",
      "Enhanced system speed and scalability to handle growing client and booking volume effortlessly.",
      "Content-rich homepage gives visitors key info on services, promotions, and updates at a glance.",
      "User-friendly interface is easy for all users, ensuring smooth navigation throughout the site.",
      "Automation in booking and purchases cuts down on time clients spend on admin tasks.",
      "Secure user authentication for clients, barbers, and managers, with tailored access for each role.",
      "Detailed service info, including descriptions and pricing, helps clients make booking choices.",
      "Comprehensive photo gallery showcases the barbershop's work, helping clients make informed decisions.",
      "News section keeps clients updated on trends, barbershop promos, and new services or products.",
      "Clients can buy grooming products directly on the platform for a convenient shopping experience.",
      "Responsive, mobile-friendly design ensures seamless access across devices.",
    ],

    githubLink: "https://github.com/vladertec/Barbershop_information_system",
  },
  {
    id: 2,
    title: "Charity Foundation Website",
    projectImages: [
      { src: "/img/project_2/1.png", alt: "Project Image 1" },
      { src: "/img/project_2/2.png", alt: "Project Image 2" },
      { src: "/img/project_2/3.png", alt: "Project Image 3" },
      { src: "/img/project_2/4.png", alt: "Project Image 4" },
      { src: "/img/project_2/5.png", alt: "Project Image 5" },
      { src: "/img/project_2/6.png", alt: "Project Image 6" },
      { src: "/img/project_2/7.png", alt: "Project Image 7" },
      { src: "/img/project_2/8.png", alt: "Project Image 8" },
      // { src: "/img/project_2/9.png", alt: "Project Image 9" },
      // { src: "/img/project_2/10.png", alt: "Project Image 10" },
    ],

    description: [
      "This project is a comprehensive website designed for a charity foundation to enhance donor engagement and promote transparency. Built with an accessible and user-friendly interface, it allows visitors to explore the foundation's mission, learn about ongoing projects, and contribute to meaningful causes through secure online donations.",
      "The site includes a donation processing feature with secure payment integration, enabling contributors to support projects with confidence. Real-time updates on current projects and a dedicated section for beneficiary stories keep donors informed and engaged in the impact of their contributions.",
      "Administrators can efficiently manage donations, post updates, and respond to user inquiries, facilitating direct communication with supporters. The responsive and minimalist design ensures that users enjoy a seamless experience across all devices, promoting accessibility and inclusivity for a wider audience.",
    ],
    technologies: [
      { name: "React", link: "https://reactjs.org/" },
      { name: "Redux", link: "https://redux.js.org/" },
      { name: "React Router", link: "https://reactrouter.com/" },
      { name: "Material-UI (MUI)", link: "https://mui.com/" },
      { name: "Express", link: "https://expressjs.com/" },
      { name: "Node.js", link: "https://nodejs.org/" },
      { name: "MongoDB", link: "https://www.mongodb.com/" },
      { name: "JWT", link: "https://jwt.io/" },
      { name: "Sass", link: "https://sass-lang.com/" },
      { name: "NPM", link: "https://www.npmjs.com/" },
      { name: "Mongoose", link: "https://mongoosejs.com/" },
      { name: "Figma", link: "https://www.figma.com/" },
    ],
    role: "Lead Developer – I developed both the frontend and backend for this platform, focusing on building secure authentication for user roles, integrating payment processing for secure donations, and implementing responsive design to ensure accessibility across all devices. I oversaw data management, optimized API interactions, and focused on user-centered design principles to enhance usability and donor satisfaction.",
    features: [
      {
        title: "Online Donations",
        description:
          "secure donation processing with integration for online payments, allowing users to contribute directly to support specific projects or general foundation goals.",
      },
      {
        title: "Project Updates",
        description:
          "real-time project updates keep donors informed of the progress of their contributions, providing transparency and fostering trust in the foundation's activities.",
      },
      {
        title: "Beneficiary Stories",
        description:
          "highlighted stories of individuals and communities positively impacted by the foundation's projects, allowing donors to see the real-world effects of their support.",
      },
      {
        title: "Responsive Design",
        description:
          "optimized for mobile, tablet, and desktop devices, ensuring that the website remains fully functional and accessible regardless of the user’s preferred device.",
      },
      {
        title: "Admin Management",
        description:
          "a dedicated admin panel for foundation staff to manage donations, post updates, and review feedback, streamlining operations and enhancing communication with donors.",
      },
    ],
    achievements: [
      "Boosted donor engagement by providing secure, easy-to-use online donation options and real-time project updates.",
      "Enhanced transparency with an informative homepage, allowing potential donors to quickly learn about the foundation's mission, current projects, and impact.",
      "Streamlined administrative tasks for the foundation through automated donation tracking and management, freeing up resources to focus on project execution.",
      "Created a user-friendly design that appeals to a wide demographic, ensuring that both tech-savvy and novice users can easily navigate and support the foundation.",
      "Optimized site performance and scalability to support high traffic and future expansion, allowing the foundation to grow its donor base without compromising functionality.",
      "Integrated a secure and responsive design, providing seamless accessibility and security across all devices, fostering trust and encouraging more frequent donations.",
    ],
    featuresMobile: [
      {
        title: "Online Donations",
        description:
          "users can securely donate to the foundation's projects, selecting an amount and payment method, with a streamlined, mobile-optimized donation process.",
      },
      {
        title: "Project Updates",
        description:
          "provides regular updates on current projects, allowing users to track the foundation's work and stay informed about how donations are being utilized.",
      },
      {
        title: "Beneficiary Stories",
        description:
          "shares inspiring stories from individuals and communities who have benefited from the foundation's projects, building a personal connection with donors.",
      },
      {
        title: "Responsive Design",
        description:
          "ensures full functionality on smartphones and tablets, providing an optimized user experience across all devices for enhanced accessibility.",
      },
      {
        title: "Admin Management",
        description:
          "a mobile-friendly admin panel where staff can manage donations, updates, and responses, facilitating easier operational oversight from any device.",
      },
    ],
    achievementsMobile: [
      "Enhanced donor engagement with an intuitive, mobile-friendly donation process and accessible project information.",
      "Boosted transparency by making key information readily available on the mobile homepage, building trust with users.",
      "Reduced administrative overhead by automating donation tracking and communication, focusing resources on project development.",
      "Simplified navigation and interaction to accommodate a broad range of users, encouraging repeat donations and continuous engagement.",
      "Designed with scalability in mind, ensuring the site can handle growing traffic and increasing donations as the foundation expands.",
      "Built a fully responsive, secure platform, offering smooth functionality on all devices to support users wherever they are.",
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 100000,
    cssEase: "linear",
    prevArrow: null,
    nextArrow: null,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div ref={ref} className={`project-detail ${inView ? "visible" : ""}`}>
      <h1 className="project-detail__title">{project.title}</h1>

      <div className="project-detail__slider project-slider">
        <Slider {...settings} className="project-slider__container">
          {project.projectImages.map((image, index) => (
            <div key={index} className="project-slider__slide">
              <img
                className="project-slider__img"
                src={image.src}
                alt={image.alt}
              />
            </div>
          ))}
        </Slider>
      </div>

      <h3 className="project-detail__subtitle">Project Overview</h3>
      <div className="project-detail__description">
        {project.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <h3 className="project-detail__subtitle">Main Technologies and Tools</h3>
      <ul className="project-detail__tech-list">
        {project.technologies.map((tech, index) => (
          <li key={index} className="project-detail__tech-item">
            <span className="project-detail__tech-dot"></span>
            <a
              className="project-detail__tech-link"
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {tech.name}
            </a>
          </li>
        ))}
      </ul>

      <h3 className="project-detail__subtitle">My Role</h3>
      <p className="project-detail__description">{project.role}</p>

      <h3 className="project-detail__subtitle">Key Features</h3>
      <ul className="project-detail__features-list">
        {project.features.map((feature, index) => (
          <li key={index} className="project-detail__feature-item">
            <span className="project-detail__feature-dot"></span>
            <strong className="project-detail__feature-name">
              {feature.title}
            </strong>
            : {feature.description}
          </li>
        ))}
      </ul>

      <ul className="project-detail__features-list project-detail__features-list--mobile">
        {project.featuresMobile.map((feature, index) => (
          <li key={index} className="project-detail__feature-item">
            <span className="project-detail__feature-dot"></span>
            <strong className="project-detail__feature-name">
              {feature.title}
            </strong>
            : {feature.description}
          </li>
        ))}
      </ul>

      <h3 className="project-detail__subtitle">Achievements</h3>

      <ul className="project-detail__achievement-list">
        {project.achievements.map((achievement, index) => (
          <li key={index} className="project-detail__achievement-item">
            <span className="project-detail__achievement-dot"></span>
            {achievement}
          </li>
        ))}
      </ul>

      <ul className="project-detail__achievement-list project-detail__achievement-list--mobile">
        {project.achievementsMobile.map((achievement, index) => (
          <li key={index} className="project-detail__achievement-item">
            <span className="project-detail__achievement-dot"></span>
            {achievement}
          </li>
        ))}
      </ul>

      <Link
        href={project.githubLink}
        passHref
        className="project-detail__btn-container"
      >
        <button className="project-detail__btn"> VIEW ON GITHUB</button>
      </Link>
    </div>
  )
}

export default ProjectDetail
