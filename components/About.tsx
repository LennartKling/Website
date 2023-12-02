"use client";

import React from "react";
import Globe from "./images/about/Globe";
import Logos from "./images/about/Logos";
import Avatar from "./images/about/Avatar";
import MouseMotion from "../pages/api/MouseMotion";

const About = () => {
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
    <div
      className="flex justify-center mt-32 lg:mt-64 max-w-full overflow-hidden"
      id="about"
    >
      <div className="max-w-[800px]">
        <div className="flex w-full justify-center">
          <div className="absolute -z-50">
            <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
              <Globe />
            </div>
          </div>
        </div>
        <div className="lg:flex max-w-[300px] md:max-w-[500px] lg:max-w-none px-6">
          <div className="w-full px-2 lg:w-[70%]">
            <p className="w-full text-5xl lg:text-7xl font-black mt-10 text-start">
              ABOUT ME
            </p>
            <p className="indie w-full text-2xl mt-6 text-start">
              I am a student at the technical university of munich with over 4
              years in programming experience. After founding my own clothing
              brand and engaging in different student inititaves like the TUM
              blockchain club and UnternehmerTUM, I decided to make my hobby a
              profession and become a web developer and graphic designer.
            </p>
          </div>
          <div className="w-full lg:w-[30%] flex items-center justify-center mt-8 lg:mt-0">
            <div
              className="relative w-[150px] h-[150px] lg:w-[250px] lg:h-[250px]"
              ref={(node) => {
                if (node) animate(node);
              }}
            >
              <Avatar />
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end mt-8 lg:mt-10">
          <div className="relative w-[170px] h-[70px]">
            <Logos />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
