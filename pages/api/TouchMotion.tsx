"use client";
import { useState, useEffect } from "react";

const TouchMotion = () => {
  const [touchPosition, setTouchPosition] = useState({
    touchX: 0,
    touchY: 0,
    maxW: 0,
    maxH: 0,
  });

  const updateTouchPosition = (e: any) => {
    setTouchPosition({
      touchX: e.clientX,
      touchY: e.clientY,
      maxW: e.view.innerWidth,
      maxH: e.view.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("pointermove", updateTouchPosition);
    return () => {
      window.removeEventListener("pointermove", updateTouchPosition);
    };
  }, []);

  return touchPosition;
};

export default TouchMotion;
