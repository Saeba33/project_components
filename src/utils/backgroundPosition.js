export const getBackgroundPosition = (
  index,
  hoveredIndex,
  isMobile,
  projectData
) => {
  const project = projectData[index];
  if (hoveredIndex === index) {
    return "center center";
  }

  const offsetX = isMobile ? project.offsetXMobile : project.offsetXDesktop;
  const offsetY = isMobile ? project.offsetYMobile : project.offsetYDesktop;

  return `${offsetX} ${offsetY}`;
};
