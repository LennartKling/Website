import React from "react";
import Image from "./images/work-page/Image";
import MouseMotion from "../pages/api/MouseMotion";

const Work = (props: any) => {
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
    <div className="mx-auto pb-20 max-w-[1000px]">
      <div className="w-full h-[150px]"></div>
      <p className="whisper text-9xl w-full text-center">{props.title}</p>
      <div
        className="w-full shadow-2xl mt-10"
        ref={(node) => {
          if (node) animate(node);
        }}
      >
        <Image img={props.img1} />
      </div>
      <div className="flex mt-20">
        <div className="h-[60px] w-[2px] rounded-full bg-black mr-6"></div>
        <p className="diphylleia text-xl w-[70%]">{props.description}</p>
      </div>
      <div className="flex mt-20 group">
        <div className="shadow-2xl w-full group-hover:translate-x-[50%] duration-300 ease-in-out group-hover:brightness-50">
          <Image img={props.img2} />
        </div>
        <div className="cursor-pointer flex items-center w-full justify-center text-[#1FD0FD] group-hover:text-white ease-in-out">
          <a
            className="flex justify-center items-center text-4xl font-bold w-full h-[99%] text-center group-hover:-translate-x-[50%] duration-300"
            target="_blank"
            href={props.link}
            rel="noopener noreferrer"
          >
            VISIT
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
