"use client";
import { useState, useEffect } from "react";

const SwipeMotion = () => {
  let down: any = null;

  const [swipe, setSwipe] = useState(0);

  const updateTouchStart = (e: any) => {
    down = e.touches[0].clientY;
  };

  const updateTouchMove = (e: any) => {
    if (!down) return;
    let up = e.touches[0].clientY;
    updateSwipe(up - down);
    down = null;
  };

  const updateSwipe = (y: number) => {
    setSwipe(y);
  };

  useEffect(() => {
    document.addEventListener("touchstart", updateTouchStart);
    document.addEventListener("touchmove", updateTouchMove);
    return () => {
      document.removeEventListener("touchstart", updateTouchStart);
      document.removeEventListener("touchmove", updateTouchMove);
    };
  }, []);

  return swipe;
};

export default SwipeMotion;
