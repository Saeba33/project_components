import { useState, useEffect } from "react";

export function useResponsiveHover() {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);

      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const onMouseEnter = (index) => setHoveredIndex(index);
  const onMouseLeave = () => setHoveredIndex(null);

  return { isMobile, hoveredIndex, onMouseEnter, onMouseLeave };
}
