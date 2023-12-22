"use client";

import React from "react";
import Together from "./images/contact/Together";
import { useEffect } from "react";
import ScrollPosition from "../pages/api/ScrollPosition";

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

const Contact = () => {
  const scroll = ScrollPosition().y;

  const scrollTo = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };
  const animZoom = (node: any, height: number) => {
    let top = node.getBoundingClientRect().top;
    let bottom = node.getBoundingClientRect().bottom;
    let in_range_start = top - bottom + height * 0.7;
    let in_range_end = height;
    let out_range_start = 1;
    let out_range_end = 0.4;
    let anim = map(
      in_range_start,
      in_range_end,
      out_range_start,
      out_range_end,
      top
    );
    if (anim < out_range_end) anim = out_range_end;
    if (anim > out_range_start) anim = out_range_start;
    node.children[0].style.transform = `scale(${anim})`;
  };
  return (
    <div>
      <div
        className="md:flex mt-32 lg:mt-64 w-[100vw] overflow-hidden"
        id="contact"
      >
        <div
          ref={(node) => {
            if (!node) return;
            animZoom(node, window.innerHeight);
          }}
          className="flex justify-center items-center py-12 md:py-0 w-full md:w-[50vw] bg-black"
        >
          <div className="text-white max-w-[500px]">
            <p className="w-full text-center text-4xl md:text-6xl lg:text-7xl font-bold">
              LET&apos;S WORK TOGETHER
            </p>
            <div className="flex justify-center w-full mt-20">
              <a
                className="hover:text-black hover:bg-white duration-300 ease-in font-bold text-2xl md:text-4xl py-4 px-12 border-white border-[3px] md:border-4"
                href="mailto:contact@luiskameter.com"
              >
                contact
              </a>
            </div>
          </div>
        </div>
        <div
          ref={(node) => {
            if (!node) return;
            animZoom(node, window.innerHeight);
          }}
          className="flex justify-center items-center w-full md:w-[50vw] bg-white"
        >
          <div className="relative">
            <Together />
          </div>
        </div>
      </div>
      <div className="flex w-[100vw]">
        <div className="flex justify-start items-center w-full bg-black pl-4 py-8 md:pl-10 md:pb-10">
          <div className="text-white font-black text-2xl md:text-4xl">
            <div className="cursor-pointer group">
              <a
                className="group-hover:text-[#1FD0FD] duration-200 ease-in"
                onClick={() => scrollTo("work")}
                onKeyDown={() => scrollTo("work")}
              >
                work
              </a>
            </div>
            <div className="cursor-pointer group">
              <a
                className="group-hover:text-[#1FD0FD] duration-200 ease-in"
                onClick={() => scrollTo("services")}
                onKeyDown={() => scrollTo("services")}
              >
                services
              </a>
            </div>
            <div className="cursor-pointer group">
              <a
                className="group-hover:text-[#1FD0FD] duration-200 ease-in"
                onClick={() => scrollTo("about")}
                onKeyDown={() => scrollTo("about")}
              >
                about
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center w-full bg-white pl-4 py-8 md:pl-10 md:pb-10">
          <div className="text-black font-black text-2xl md:text-4xl">
            <a
              href="/imprint"
              className="group-hover:text-[#5A70E0] duration-200 ease-in"
            >
              imprint
            </a>
            <div className="cursor-pointer group">
              <a
                href="/privacy-policy"
                className="group-hover:text-[#5A70E0] duration-200 ease-in"
              >
                privacy
                <br />
                policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
