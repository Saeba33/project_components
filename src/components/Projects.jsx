"use client";

import { useState, useEffect } from "react";
import projectData from "@/data/projectData";

export default function Projects() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-around w-[90vw] md:w-[40vw]">
      {projectData.map((project, index) => (
        <div
          key={index}
          className={`relative h-20 w-60 md:w-20 md:h-72 rounded-full bg-no-repeat bg-cover transition-all duration-200 ease-in-out shadow-lg group ${
            isMobile ? "hover:h-[50vh] hover:w-[75%]" : "hover:flex-grow-[4]"
          } hover:rounded-lg`}
          style={{
            backgroundImage: `url(${project.imageSrc})`,
            backgroundPosition:
              hoveredIndex === index
                ? "center center"
                : isMobile
                ? `${project.offsetXMobile} ${project.offsetYMobile}`
                : `${project.offsetXDesktop} ${project.offsetYDesktop}`,
            transform: isMobile
              ? `translateX(${project.marginTop})`
              : `translateY(${project.marginTop})`,
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="absolute bottom-0 left-0 right-0 rounded-b-lg bg-black bg-opacity-50 text-white p-4 transition-opacity duration-200 opacity-0 group-hover:opacity-100">
            <h2 className="text-xl font-bold">{project.title}</h2>
            <p className="text-sm">{project.description}</p>
            <a href={project.link} target="_blank" className="underline">
              Voir plus
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
