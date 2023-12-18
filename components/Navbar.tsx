"use client";
import React from "react";
import Logo from "../components/images/Logo";
import Copyright from "./images/navbar/Copyright";
import Smile from "./images/navbar/Smile";
import ScrollPosition from "../pages/api/ScrollPosition";

const Navbar = () => {
  let scroll_y: any = ScrollPosition().y;

  return (
    <div className="hidden xl:visible w-full hover:bg-[#1FD0FD] group z-50 fixed xl:flex h-[100px] px-10 items-center bg-opacity-0 hover:bg-opacity-100 hover:shadow-xl ease-in duration-300">
      <div className="group-hover:invert duration-300 ease-in">
        <Logo />
      </div>
      <div className="w-full font-black">
        <div
          className="nav-links flex w-full justify-center group-hover:-translate-y-0 duration-300 ease-in -translate-y-[200%]"
          ref={(node) => {
            if (!node) return;
            if (scroll_y < 100) {
              node.style.transform = "translateY(0)";
            } else {
              node.style.transform = "";
            }
          }}
        >
          <div className="relative nav-hover">
            <button
              className="mx-4 lg:text-4xl group-hover:text-white duration-300 ease-in"
              onClick={() => {
                document
                  .getElementById("work")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              work
            </button>
            <div className="smile mt-2 absolute flex justify-center w-full pointer-events-none opacity-0 ease-in duration-300 translate-y-8">
              <Smile />
            </div>
          </div>
          <div className="relative nav-hover">
            <button
              className="mx-4 lg:text-4xl group-hover:text-white duration-300 ease-in"
              onClick={() => {
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              services
            </button>
            <div className="smile mt-2 absolute flex justify-center w-full pointer-events-none opacity-0 ease-in duration-300 translate-y-8">
              <Smile />
            </div>
          </div>
          <div className="relative nav-hover">
            <button
              className="mx-4 lg:text-4xl group-hover:text-white duration-300 ease-in"
              onClick={() => {
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              about
            </button>
            <div className="smile mt-2 absolute flex justify-center w-full pointer-events-none opacity-0 ease-in duration-300 translate-y-8">
              <Smile />
            </div>
          </div>
          <div className="relative nav-hover">
            <button
              className="mx-4 lg:text-4xl group-hover:text-white duration-300 ease-in"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              contact
            </button>
            <div className="smile mt-2 absolute flex justify-center w-full pointer-events-none opacity-0 ease-in duration-300 translate-y-8">
              <Smile />
            </div>
          </div>
        </div>
        <div className="absolute w-full flex justify-center mt-4">
          <div
            className="w-[200px] h-[6px] bg-black rounded-full translate-x-[-50%] -translate-y-10 group-hover:-translate-y-0 duration-300 ease-in opacity-100 group-hover:opacity-0"
            ref={(node) => {
              if (!node) return;
              if (scroll_y < 100) {
                node.style.transform = "translate(-50%, 50px)";
                node.style.opacity = "0";
              } else {
                node.style.transform = "";
                node.style.opacity = "";
              }
            }}
          ></div>
        </div>
      </div>
      <div className="group-hover:invert duration-300 ease-in">
        <Copyright />
      </div>
    </div>
  );
};

export default Navbar;
