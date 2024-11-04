// app/projects/[id]/page.js
"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function ProjectDetail() {
  const params = useParams();
  const { id } = params;

  return (
    <div className="project-detail">
      <h1 className="project-detail__title">Project Title for ID: {id}</h1>
      <div className="project-detail__image-container">
        <Image
          className="project-detail__image"
          src="/path/to/image.jpg"
          alt="Project Image"
          width={600}
          height={400}
        />
      </div>
      <p className="project-detail__description">
        This is the project description for project ID: {id}.
      </p>
      <Link href="/" className="project-detail__link">
        Back to Projects
      </Link>
    </div>
  );
}
