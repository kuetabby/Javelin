import { useState, useEffect } from "react";

export const useWidth = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (window) {
      setWidth(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    const handleResize = (): void => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return (): void => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};
