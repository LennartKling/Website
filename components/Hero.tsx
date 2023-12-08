"use client";
import React from "react";
import Face from "../components/images/hero/Face";
import Star from "../components/images/hero/Star";
import Flower from "../components/images/hero/Flower";
import Medal from "../components/images/hero/Medal";
import Name from "../components/images/hero/Name";
import MouseMotion from "../pages/api/MouseMotion";

const Hero = () => {
  const { mouseX, mouseY, maxW, maxH }: any = MouseMotion();

  const animate = (node: any) => {
    if (maxW < 1080) return;

    let factor = node.classList.contains("hero") ? 0.025 : 0.007;

    let changeX = factor * (mouseX - maxW / 2);
    let changeY = factor * (mouseY - maxH / 2);

    node.animate(
      { transform: `translate(${changeX}px, ${changeY}px)` },
      { duration: 1000, fill: "forwards" }
    );
  };

  return (
    <div className="relative max-w-[1000px] mx-auto pt-20 px-4  overflow-hidden">
      <div
        className="absolute left-0 top-28 w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
        ref={(node) => {
          if (node) animate(node);
        }}
      >
        <Flower />
      </div>
      <div
        className="absolute right-0 bottom-12 md:bottom-0 w-[135px] h-[150px] md:w-[180px] md:h-[200px]"
        ref={(node) => {
          if (node) animate(node);
        }}
      >
        <Medal />
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex">
          <div className="hidden mt-40 md:flex md:visible items-center min-h-full">
            <div>
              <Star />
            </div>
          </div>
          <div className="relative md:mx-32 flex justify-center items-center w-full h-full pointer-events-none mt-40">
            <div className="w-[250px] h-[250px] md:w-[430px] md:h-[430px]">
              <Name />
            </div>
            <div
              className="w-[260px] h-[260px] md:w-[450px] md:h-[450px] absolute hero"
              ref={(node) => {
                if (node) animate(node);
              }}
            >
              <Face />
            </div>
          </div>
          <div className="hidden mt-40 md:flex md:visible items-center min-h-full">
            <div>
              <Star />
            </div>
          </div>
        </div>
        <p className="playfair mt-24 text-center text-md">
          THAT&apos;S ME - I AM A WEB DEVELOPER
          <br />
          AND GRAPHIC DESIGNER FROM GERMANY
        </p>
      </div>
    </div>
  );
};

export default Hero;
