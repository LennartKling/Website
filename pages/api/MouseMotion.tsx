"use client";
import { useState, useEffect } from "react";

const MouseMotion = () => {
  const [mousePosition, setMousePosition] = useState({
    mouseX: 0,
    mouseY: 0,
    maxW: 0,
    maxH: 0,
  });

  const updateMousePosition = (e: any) => {
    setMousePosition({
      mouseX: e.clientX,
      mouseY: e.clientY,
      maxW: e.view.innerWidth,
      maxH: e.view.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
};

export default MouseMotion;
