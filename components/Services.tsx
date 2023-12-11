"use client";

import React from "react";
import WebDev from "./images/services/WebDev";
import Graphic from "./images/services/Graphic";
import Guidance from "./images/services/Guidance";
import GuidanceGraphic from "./images/services/GuidanceGraphic";
import ScrollPosition from "../pages/api/ScrollPosition";
import MouseMotion from "../pages/api/MouseMotion";
import { useEffect, useState } from "react";

const map = (
  in_start: number,
  in_end: number,
  out_start: number,
  out_end: number,
  input: number
) => {
  let slope = (out_end - out_start) / (in_end - in_start);
  return out_start + slope * (input - in_start);
};

const Services = () => {
  const scroll = ScrollPosition().y;

  const animHoriz = (
    node: any,
    width: number,
    height: number,
    direction: number
  ) => {
    if (direction == 1 && width < 1024) {
      return;
    }
    let top = node.getBoundingClientRect().top;
    let bottom = node.getBoundingClientRect().bottom;
    let in_range_start = top - bottom + height * 0.8;
    let in_range_end = height;
    let out_range_start = 0;
    let out_range_end = 100 * direction;
    let anim = map(
      in_range_start,
      in_range_end,
      out_range_start,
      out_range_end,
      top
    );
    if (anim < out_range_end && direction == -1) anim = out_range_end;
    if (anim > out_range_start && direction == -1) anim = out_range_start;
    if (anim > out_range_end && direction == 1) anim = out_range_end;
    if (anim < out_range_start && direction == 1) anim = out_range_start;
    node.style.transform = `translateX(${anim}%)`;
  };

  const animRound = (node: any, height: number) => {
    let top = node.getBoundingClientRect().top;
    let bottom = node.getBoundingClientRect().bottom;
    let in_range_start = top - bottom + height;
    let in_range_end = height;
    let out_range_start = 0;
    let out_range_end = -90;
    let anim = map(
      in_range_start,
      in_range_end,
      out_range_start,
      out_range_end,
      top
    );
    if (anim < out_range_end) anim = out_range_end;
    if (anim > out_range_start) anim = out_range_start;
    node.children[0].style.transform = `rotate(${anim}deg)`;
  };

  const animZoom = (node: any, height: number) => {
    let top = node.getBoundingClientRect().top;
    let bottom = node.getBoundingClientRect().bottom;
    let in_range_start = top - bottom;
    let in_range_end = height * 1.5;
    let out_range_start = 1;
    let out_range_end = 0.5;
    let anim = map(
      in_range_start,
      in_range_end,
      out_range_start,
      out_range_end,
      top
    );
    if (anim < out_range_end) anim = out_range_end;
    if (anim > out_range_start) anim = out_range_start;
    console.log(in_range_start, anim);
    node.children[0].style.transform = `scale(${anim})`;
  };

  const banner = (node: any, right: boolean, width: number) => {
    let fac;
    if (width > 769) {
      fac = 355;
    } else {
      fac = 295;
    }
    let change = (scroll % fac) - fac;
    if (right) {
      node.style.transform = `scaleY(1.8) translateX(${change}px)`;
    } else {
      node.style.transform = `scaleY(1.8) rotateY(180deg) translateX(${change}px)`;
    }
  };

  return (
    <div className="max-w-[100vw] mt-32 lg:mt-64 overflow-hidden" id="services">
      <div className="overflow-hidden max-w-screen">
        <div className="w-screen h-full">
          <p
            className="w-[150%] text-3xl md:text-7xl font-black whitespace-nowrap py-2 md:py-5"
            ref={(node) => {
              if (!node) return;
              banner(node, true, window.innerWidth);
            }}
          >
            SERVICES SERVICES SERVICES SERVICES SERVICES SERVICES SERVICES
            SERVICES SERVICES SERVICES SERVICES SERVICES SERVICES
          </p>
        </div>
        <div className="">
          <p
            className="-translate-x-[380px] w-[150%] text-3xl md:text-7xl font-black whitespace-nowrap py-2 md:py-5"
            ref={(node) => {
              if (!node) return;
              banner(node, false, window.innerWidth);
            }}
          >
            SERVICES SERVICES SERVICES SERVICES SERVICES SERVICES SERVICES
            SERVICES SERVICES SERVICES SERVICES SERVICES SERVICES
          </p>
        </div>
      </div>
      <div className="md:flex w-full mt-8 lg:mt-28 p-4 md:p-16 lg:p-24">
        <div
          ref={(node) => {
            if (!node) return;
            animHoriz(node, window.innerWidth, window.innerHeight, -1);
          }}
          className="flex justify-center md:mr-4 lg:mr-8 w-full"
        >
          <div className="max-w-[280px] lg:max-w-[500px] w-[240px] lg:w-[500px] overflow-hidden">
            <WebDev />
          </div>
        </div>
        <div
          className="px-4 md:px-6 w-full mt-8 md:mt-16 lg:mt-10"
          ref={(node) => {
            if (!node) return;
            animHoriz(node, window.innerWidth, window.innerHeight, 1);
          }}
        >
          <p className="w-full cormorant text-4xl lg:text-7xl text-center md:text-start">
            WEBSITES
          </p>
          <div className="w-full flex justify-center lg:block lg:justify-start">
            <p className="cormorant mt-4 text-2xl lg:text-3xl max-w-[500px] text-center md:text-start">
              Like what you&apos;re seeing? I specialize in web development for
              your business, brand or personal website
            </p>
          </div>
        </div>
      </div>
      <div className="w-full p-6 mt-20 md:p-16 lg:p-24">
        <div className="w-full flex justify-center">
          <div className="relative w-[250px] h-[200px] md:w-[300px] md:h-[240px] lg:w-[400px] lg:h-[300px] mt-20 md:mt-32 lg:mt-52">
            <GuidanceGraphic />
          </div>
          <div
            className="absolute"
            ref={(node) => {
              if (!node) return;
              animRound(node, window.innerHeight);
            }}
          >
            <div className="relative w-[300px] h-[300px] md:w-[500px] lg:w-[700px] md:h-[550px] lg:h-[800px]">
              <Guidance />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center mt-4">
          <p className="cormorant mt-4 text-2xl lg:text-3xl max-w-[500px] text-center">
            You want to enter the digital world but don&apos;t know where to
            start? Then you have come to the right place
          </p>
        </div>
      </div>
      <div
        ref={(node) => {
          if (!node) return;
          animZoom(node, window.innerWidth);
        }}
        className="mt-10 px-4"
      >
        <div>
          <div className="lg:flex w-full pb-0 p-6 md:pb-0 md:p-16 lg:pb-0 lg:p-24">
            <div className="w-full flex justify-center lg:justify-end mt-4">
              <div className="lg:pl-6 max-w-[500px]">
                <p className="cormorant text-4xl lg:text-7xl text-center md:text-start">
                  GRAPHIC DESIGN
                </p>
                <p className="cormorant mt-4 text-2xl lg:text-3xl max-w-[500px] text-center md:text-start">
                  Let&apos;s collaborate to create compelling designs that leave
                  a lasting impression and bring your ideas to life
                </p>
              </div>
            </div>
            <div className="w-full flex justify-center lg:justify-start mt-8 lg:mt-0">
              <div className="relative w-[150px] h-[270px] md:w-[200px] md:h-[360px] max-w-[500px] lg:ml-8">
                <Graphic />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="max-w-[1000px] w-full h-[2px] rounded-full border-b-2 border-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
