import React, { useEffect } from "react";
import Header from "./Header";
import { gsap } from "gsap";

function Hero() {
  useEffect(() => {
    let tl = gsap.timeline();
    tl.fromTo(
      ".mainHeadingGsap",
      {
        scale: 0,
      },
      {
        scale: 1,
        duration:1,
        delay: 1.9,
      }
    );
    tl.fromTo(
      ".ParaGsap",
      {
        x: -1500,
        opacity: 0,
      },
      {
        x: 0,
        duration: 0.5,
        delay: 0.2,
        opacity: 1,
      }
    );
    tl.fromTo(
      ".buttonGsap",
      {
        x: -1500,
        opacity: 0,
      },
      {
        x: 0,
        duration: 0.1,
        stagger: 0.3,
        delay: 0.2,
        opacity: 1,
      }
    );
    tl.fromTo(
      ".buttonGsapTwo",
      {
        x: 1500,
        opacity: 0,
      },
      {
        x: 0,
        duration: 0.9,
        stagger: 0.3,
        delay: 0.2,
        opacity: 1,
      }
    );
  });
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex grow items-center bg-black">
        <div className="container px-3">
          <h1 className="mainHeadingGsap font-poppins font-normal lg:text-[72px] sm:text-[60px] text-[45px] xl:leading-[91.8px] sm:leading-[68px] leading-[51px] text-white max-w-[1320px] text-center mx-auto">
            There are games... And then
            <span className="xl:block">
              there are <span className="text-skyblue">Gilded</span> Games
            </span>
          </h1>

          <p className="ParaGsap font-Josefin text-[18px] lh-[22.95px] text-white text-center mt-4">
            Remaining Presale Time
          </p>
          <div className="flex flex-wrap items-center sm:gap-6 gap-3 justify-center lg:mt-[22px] mt-[5px]">
            <button className="buttonGsap font-Josefin fw-normal text-[24px] leading-[24px] text-white flex items-center gap-[10px] bg-grident-rl hover:bg-gradient-tb shadow-shadow-btn py-[14px] px-[34px] rounded-[79px] transition duration-300 ease-linear">
              Presale
            </button>
            <button className="buttonGsapTwo font-Josefin fw-normal text-[24px] leading-[24px] text-white border border-white px-[34px] py-[14px] rounded-[79px] hover:bg-white hover:text-black transition duration-300 ease-linear">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
