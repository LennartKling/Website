"use client";

import React from "react";
import MouseMotion from "../pages/api/MouseMotion";
import Friseur from "./images/work/Friseur";
import Bluepaca from "./images/work/Bluepaca";
import Leam from "./images/work/Leam";
import Cursor from "../components/Cursor";

const Work = () => {
  const { mouseX, mouseY, maxW }: any = MouseMotion();

  const animate = (node: any) => {
    if (maxW < 1080) return;

    let rect = node.getBoundingClientRect();
    let offsetX = mouseX - (rect.left + rect.right) / 2;
    let offsetY = mouseY - (rect.top + rect.bottom) / 2;

    let factor = 0.025;
    let perc = "-200%";

    if (node.classList.contains("text-mid")) {
      factor = 0.01;
      perc = "-100%";
    }

    let changeX = factor * offsetX;
    let changeY = factor * offsetY;

    node.animate(
      { transform: `translate(${changeX}px, calc(${perc} + ${changeY}px))` },
      { duration: 1000, fill: "forwards" }
    );
  };

  return (
    <div className="mt-32 lg:mt-64" id="work">
      <div className="font-black mb-12 text-6xl md:text-8xl pointer-events-none flex w-full justify-center">
        <div>
          <p className="drop-shadow-2xl blur-opac">WORK</p>
          <p
            className="text-mid drop-shadow-2xl -translate-y-[60px] md:-translate-y-24 translate-x-1 text-[#1FD2FF] blur-work"
            ref={(node) => {
              if (node) animate(node);
            }}
          >
            WORK
          </p>
          <p
            className=" -translate-y-[120px] md:-translate-y-48 translate-x-2 text-[#5A70E0] blur-work"
            ref={(node) => {
              if (node) animate(node);
            }}
          >
            WORK
          </p>
        </div>
      </div>
      <div className="flex justify-center w-full lg:mt-0">
        <div className="lg:flex lg:mt-0 -mt-10 w-[250px] md:w-[300px] lg:w-auto">
          <div className="mb-10 lg:mb-0 relative xl:mx-12 w-[250px] md:w-[300px] lg:h-full group">
            <a
              target="_blank"
              href="https://friseurevakameter.de/"
              rel="noopener noreferrer"
              className="cursor-none shadow-2xl"
            >
              <div className="hover:brightness-50 ease-in duration-300">
                <div className="blur-opac relative w-[250px] md:w-[300px] h-[167px] md:h-[200px]">
                  <Friseur />
                </div>
              </div>
              <div className="absolute opacity-0 group-hover:opacity-100 ease-in duration-300 flex items-center -translate-y-[100%] w-full h-full pointer-events-none">
                <p className="text-white text-center w-full font-black text-3xl">
                  EVA KAMETER
                </p>
              </div>
              <div className="fixed w-[100vw] h-[100vh] top-0 left-0 object-cover -z-50 opacity-0 group-hover:opacity-20 pointer-events-none blur-md ease-in duration-300">
                <Friseur />
              </div>
              <div className="opacity-0 group-hover:opacity-100 fixed w-screen h-screen left-0 top-0 z-50 pointer-events-none">
                <Cursor />
              </div>
            </a>
          </div>
          <div className="mb-10 lg:mb-0 relative lg:mx-12 w-[250px] md:w-[300px] lg:h-full group">
            <a
              target="_blank"
              href="https://leam.tech/"
              rel="noopener noreferrer"
              className="cursor-none shadow-2xl"
            >
              <div className="hover:brightness-50 ease-in duration-300">
                <div className="blur-opac relative w-[250px] md:w-[300px] h-[167px] md:h-[200px]">
                  <Leam />
                </div>
              </div>
              <div className="absolute opacity-0 group-hover:opacity-100 ease-in duration-300 flex items-center -translate-y-[100%] w-full h-full pointer-events-none">
                <p className="text-white text-center w-full font-black text-3xl">
                  LEAM
                </p>
              </div>
              <div className="fixed w-screen h-screen top-0 left-0 object-cover -z-50 opacity-0 group-hover:opacity-20 pointer-events-none blur-md ease-in duration-300">
                <Leam />
              </div>
              <div className="opacity-0 group-hover:opacity-100 fixed w-screen h-screen left-0 top-0 z-50 pointer-events-none">
                <Cursor />
              </div>
            </a>
          </div>
          <div className="relative xl:mx-12 w-[250px] md:w-[300px] lg:h-full group">
            <a
              target="_blank"
              href="https://bluepaca.com/"
              rel="noopener noreferrer"
              className="cursor-none shadow-2xl"
            >
              <div className="hover:brightness-50 ease-in duration-300">
                <div className="blur-opac relative w-[250px] md:w-[300px] h-[167px] md:h-[200px]">
                  <Bluepaca />
                </div>
              </div>
              <div className="absolute opacity-0 group-hover:opacity-100 ease-in duration-300 flex items-center -translate-y-[100%] w-full h-full pointer-events-none">
                <p className="text-white text-center w-full font-black text-3xl">
                  BLUEPACA
                </p>
              </div>
              <div className="fixed w-screen h-screen top-0 left-0 object-cover -z-50 opacity-0 group-hover:opacity-20 pointer-events-none blur-md ease-in duration-300">
                <Bluepaca />
              </div>
              <div className="opacity-0 group-hover:opacity-100 fixed w-screen h-screen left-0 top-0 z-50 pointer-events-none">
                <Cursor />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
