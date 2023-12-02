"use client";
import { useState, useEffect } from "react";

const ScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState({
    y: 0,
  });

  const updateScrollPosition = () => {
    setScrollPosition({
      y: window.scrollY,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollPosition);
    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);

  return scrollPosition;
};

export default ScrollPosition;
