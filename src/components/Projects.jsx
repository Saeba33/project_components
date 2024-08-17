"use client";

import { useResponsiveHover } from "@/hooks/useResponsiveHover";
import projectData from "@/data/projectData";
import { getBackgroundPosition } from "@/utils/backgroundPosition";

export default function Projects() {
  const { isMobile, hoveredIndex, onMouseEnter, onMouseLeave } =
    useResponsiveHover();

  return (
    <div className="relative gap-3 flex flex-col md:flex-row items-center justify-center w-[90vw] md:w-[50vw]">
      {projectData.map((project, index) => (
        <div
          key={index}
          className={`relative h-20 w-60 md:w-20 md:h-72 rounded-full bg-no-repeat bg-cover transition-all duration-200 ease-in-out shadow-lg group ${
            isMobile ? "hover:h-[50vh] hover:w-[75%]" : "hover:flex-grow-[4]"
          } hover:rounded-lg`}
          style={{
            backgroundImage: `url(${project.imageSrc})`,
            backgroundPosition: getBackgroundPosition(
              index,
              hoveredIndex,
              isMobile,
              projectData
            ),
          }}
          onMouseEnter={() => onMouseEnter(index)}
          onMouseLeave={onMouseLeave}
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
