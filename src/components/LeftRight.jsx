import React, { useEffect, useLayoutEffect } from "react";
import monkeyImg from "../assets/image/png/monkey.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function LeftRight() {
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    const tx = gsap.context(() => {
      let imageAnimation = gsap.timeline();
      ScrollTrigger.create({
        trigger: ".main_box1",
        start: "top top",
        end: "bottom top",
        animation: imageAnimation,
        markers: false,
        pin: true,
        scrub: true,
        // toggleActions: "play",
        // pinSpacing: false,
      });
      imageAnimation.fromTo(
        ".imgGsap",
        {
          scale: 0,
        },
        {
          scale: 1,
          duration: 0.5,
        }
      );
      imageAnimation.from(".scrollGsap", {
        x: -1920,
        stagger: 0.3,
      });
      imageAnimation.from(".scrollGsapRight", {
        x: 1920,
        stagger: 0.3,
      });
    });
    return () => tx.revert();
  });

  return (
    <div className="main_box1 min-h-screen flex items-center">
      <div className="container">
        <div className="flex flex-wrap justify-between items-center">
          <div className=" flex-col flex gap-5">
            <p className="text-black text-2xl font-medium scrollGsap">
              GSAP is "framework agnostic"
            </p>
            <p className="text-black text-2xl font-medium scrollGsap">
              GSAP is "framework agnostic"
            </p>  
            <p className="text-black text-2xl font-medium scrollGsap">
              GSAP is "framework agnostic"
            </p>
            <p className="text-black text-2xl font-medium scrollGsap">
              GSAP is "framework agnostic"
            </p>
          </div>
          <img
            className="imgGsap w-full lg:max-w-[500px] max-w-[200px] max-lg:my-5"
            src={monkeyImg}
            alt="monkeyImg"
          />
          <div className="flex-col flex gap-5">
            <p className="text-black text-2xl font-medium scrollGsapRight">
              GSAP is "framework agnostic"
            </p>
            <p className="text-black text-2xl font-medium scrollGsapRight">
              GSAP is "framework agnostic"
            </p>
            <p className="text-black text-2xl font-medium scrollGsapRight">
              GSAP is "framework agnostic"
            </p>
            <p className="text-black text-2xl font-medium scrollGsapRight">
              GSAP is "framework agnostic"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftRight;
