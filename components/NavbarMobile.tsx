"use client";
import React from "react";
import Logo from "../components/images/Logo";
import Smile from "./images/navbar/Smile";
import SwipeMotion from "../pages/api/SwipeMotion";
import TouchMotion from "../pages/api/TouchMotion";
import ScrollPosition from "../pages/api/ScrollPosition";
import { useState } from "react";
import Menu from "./images/navbar/Menu";

var menuOpen = false;

const NavbarMobile = () => {
  let y: number = TouchMotion().touchY;
  let swipe: number = SwipeMotion();

  const checkSwipe = (node: any) => {
    menuOpen = node.classList.contains("menu-active");
    if (swipe > 0 && !menuOpen && y < 100) {
      //node.classList.add("menu-active");
    }
  };
  const menuClicked = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    document
      .getElementsByClassName("menu-active")[0]
      ?.classList.remove("menu-active");
  };
  const openMenu = () => {
    let isOpen = document
      .getElementById("mobile-menu")
      ?.classList.contains("menu-active");
    if (isOpen) {
      document.getElementById("mobile-menu")?.classList.remove("menu-active");
    } else {
      document.getElementById("mobile-menu")?.classList.add("menu-active");
    }
  };
  return (
    <div className="lg:hidden overflow-hidden">
      <div className="fixed z-50 px-6 md:px-10 w-full h-[100px] flex justify-center items-center">
        <div>
          <Logo />
        </div>
        <div className="w-full h-full flex justify-center">
          <div
            className="flex w-full items-center justify-end"
            onClick={() => openMenu()}
            onKeyDown={() => openMenu()}
          >
            <Menu />
          </div>
        </div>
      </div>
      <div
        id="mobile-menu"
        className="-translate-y-[100%] flex flex-col justify-center top-0 left-0 fixed w-screen backdrop-blur-md h-[100vh] bg-white/80 z-40 ease-in duration-500 mb-0"
        ref={(node) => {
          if (!node) return;
          checkSwipe(node);
        }}
      >
        <div className="h-[60%] flex flex-col">
          <div
            className="flex items-center w-[70%] mx-auto h-full"
            onClick={() => menuClicked("work")}
            onKeyDown={() => menuClicked("work")}
          >
            <div className="invert">
              <Smile />
            </div>
            <p className="font-black ml-4 text-4xl text-black">work</p>
          </div>
          <div
            className="flex items-center w-[70%] mx-auto h-full"
            onClick={() => menuClicked("services")}
            onKeyDown={() => menuClicked("services")}
          >
            <div className="invert">
              <Smile />
            </div>
            <p className="font-black ml-4 text-4xl text-black">services</p>
          </div>
          <div
            className="flex items-center w-[70%] mx-auto h-full"
            onClick={() => menuClicked("about")}
            onKeyDown={() => menuClicked("about")}
          >
            <div className="invert">
              <Smile />
            </div>
            <p className="font-black ml-4 text-4xl text-black">about</p>
          </div>
          <div
            className="flex items-center w-[70%] mx-auto h-full"
            onClick={() => menuClicked("contact")}
            onKeyDown={() => menuClicked("contact")}
          >
            <div className="invert">
              <Smile />
            </div>
            <p className="font-black ml-4 text-4xl text-black">contact</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
