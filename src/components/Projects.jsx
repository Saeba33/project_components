import projectData from "@/data/projectData";

export default function Projects() {
  return (
    <div className="relative flex  h-[50vh] w-[60vw] mx-auto">
      {projectData.map((project, index) => (
        <div
          key={index}
          className="relative flex-1 rounded-full m-0 p-0 bg-center bg-no-repeat bg-cover transition-all duration-500 ease-in-out shadow-lg hover:flex-[0_0_80%] hover:rounded-lg group"
          style={{
            backgroundImage: `url(${project.imageSrc})`,
            transform: `translateY(${project.marginTop})`,
          }}
        >
          <div className="absolute bottom-0 left-0 right-0 rounded-b-lg bg-black bg-opacity-50 text-white p-4 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
            <h2 className="text-xl font-bold">{project.title}</h2>
            <p className="text-sm">{project.description}</p>
            <a href={project.link} className="underline">
              Voir plus
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
