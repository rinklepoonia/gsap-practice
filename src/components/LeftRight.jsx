import React, { useEffect, useLayoutEffect } from "react";
import monkeyImg from "../assets/image/png/monkey.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function LeftRight() {
  useLayoutEffect(() => {
    const tx = gsap.context(() => {
      let imageAnimation = gsap.timeline();
      ScrollTrigger.create({
        trigger: ".main_box",
        start: "40% 20%",
        end: "10% 50%",
        animation: imageAnimation,
        markers: false,
        pin: true,
        // scrub: true,
        toggleActions: "play",
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
    <div className="pt-[200px] pb-[200px] main_box">
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
