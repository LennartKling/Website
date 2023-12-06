"use client";
import { useState, useEffect } from "react";

const TouchMotion = () => {
  const [touchPosition, setTouchPosition] = useState({
    touchX: 0,
    touchY: 0,
  });

  const updateTouchPosition = (e: any) => {
    setTouchPosition({
      touchX: e.touches[0].clientX,
      touchY: e.touches[0].clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("touchmove", updateTouchPosition);
    return () => {
      window.removeEventListener("touchmove", updateTouchPosition);
    };
  }, []);

  return touchPosition;
};

export default TouchMotion;
