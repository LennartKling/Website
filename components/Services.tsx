"use client";

import React from "react";
import WebDev from "./images/services/WebDev";
import Graphic from "./images/services/Graphic";
import Guidance from "./images/services/Guidance";
import GuidanceGraphic from "./images/services/GuidanceGraphic";

const Services = () => {
  return (
    <div className="max-w-[100vw] mt-32 lg:mt-64" id="services">
      <div className="service-banner w-screen h-full overflow-visible">
        <p className="-translate-x-[380px] w-[150%] text-3xl md:text-7xl font-black whitespace-nowrap py-2 md:py-5">
          SERVICES SERVICES SERVICES SERVICES SERVICES SERVICES SERVICES
          SERVICES SERVICES SERVICES SERVICES SERVICES SERVICES
        </p>
      </div>
      <div className="flip-banner">
        <p className="-translate-x-[380px] w-[150%] text-3xl md:text-7xl font-black whitespace-nowrap py-2 md:py-5">
          SERVICES SERVICES SERVICES SERVICES SERVICES SERVICES SERVICES
          SERVICES SERVICES SERVICES SERVICES SERVICES SERVICES
        </p>
      </div>
      <div className="md:flex w-full mt-8 lg:mt-28 p-4 md:p-16 lg:p-24">
        <div className="enter-left w-full flex justify-center md:justify-end">
          <div className="max-w-[325px] lg:max-w-[500px] w-[325px] lg:w-[500px] flex justify-center md:mr-4 lg:mr-8">
            <div className="relative w-[500px] h-[384px] flex justify-center">
              <WebDev />
            </div>
          </div>
        </div>
        <div className="enter-right md:px-6 w-full md:mt-16 lg:mt-10">
          <p className="cormorant text-5xl lg:text-7xl text-center md:text-start">
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
      <div className="w-full p-6 md:p-16 lg:p-24">
        <div className="w-full flex justify-center">
          <div className="relative w-[250px] h-[200px] md:w-[300px] md:h-[240px] lg:w-[400px] lg:h-[300px] mt-20 md:mt-32 lg:mt-52">
            <GuidanceGraphic />
          </div>
          <div className="absolute">
            <div className="relative w-[300px] h-[420px] md:w-[500px] lg:w-[700px] md:h-[550px] lg:h-[800px] enter-round">
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
      <div className="enter-zoom mt-10">
        <div className="lg:flex w-full pb-0 p-6 md:pb-0 md:p-16 lg:pb-0 lg:p-24 overflow-hidden">
          <div className="w-full flex justify-center lg:justify-end mt-4">
            <div className="lg:pl-6 max-w-[500px]">
              <p className="cormorant text-5xl lg:text-7xl text-center md:text-start">
                GRAPHIC DESIGN
              </p>
              <p className="cormorant mt-4 text-2xl lg:text-3xl max-w-[500px] text-center md:text-start">
                Let&apos;s collaborate to create compelling designs that leave a
                lasting impression and bring your ideas to life
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
  );
};

export default Services;
