import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const year = new Date().getFullYear();

function Footer() {
  useLayoutEffect(() => {
    let tx = gsap.context(() => {
      let footerGsap = gsap.timeline();
      ScrollTrigger.create({
        trigger: ".main_box",
        start: "10px bottom",
        end: "30px 50px",
        animation: footerGsap,
        markers: false,
        toggleActions: "play",
      });
      footerGsap.fromTo(
        ".list_Gsap",
        {
          x: 100,
        },
        {
          x: 0,
          stagger: 0.3,
        }
      );
    });
  });
  return (
    <div>
      <div className="bg-black mt-[1] xl:pt-[0] lg:pt-[55px] main_box">
        <div className="container">
          <div className="xl:pt-[226.88px] lg:pt-[100px] sm:pt-[50px] pt-[25px]">
            <div className="row flex flex-wrap flex-row mx-[-12px]">
              <div className="lg:w-[41.33%] w-full px-3">
                <p className="font-poppins font-normal text-[16px] leading-[28.72px] text-white text-start mb-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  cursus dignissim. curabitur iaculis id
                </p>
              </div>
              <div className="lg:w-[58.33%] w-full px-3 lg:mt-0 mt-8">
                <div className="row flex flex-wrap flex-row mx-[-12px] lg:justify-end">
                  <div className="lg:w-[25%] w-[50%] px-3 max-lg:flex">
                    <ul className="flex items-start flex-col">
                      <li className="font-Josefin font-semibold text-[16px] lh-[28.72px] text-white mb-3">
                        About:
                      </li>
                      <li className="mb-[6px]">
                        <a
                          href="#about"
                          className="font-Josefin font-normal text-[16px] lh-[28.72px] text-[#B5B6B6] hover:underline transition-all duration-300 ease-in-out list_Gsap"
                        >
                          About Us
                        </a>
                      </li>
                      <li className="mb-[6px]">
                        <a
                          href="#earn"
                          className="font-Josefin font-normal text-[16px] lh-[28.72px] text-[#B5B6B6] hover:underline transition-all duration-300 ease-in-out list_Gsap"
                        >
                          Career
                        </a>
                      </li>
                      <li>
                        <a
                          href="#nodes"
                          className="font-Josefin font-normal text-[16px] lh-[28.72px] text-[#B5B6B6] hover:underline transition-all duration-300 ease-in-out list_Gsap"
                        >
                          Gilded Nodes
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="lg:w-[25%] w-[50%] px-3">
                    <ul className="flex items-start flex-col">
                      <li className="font-Josefin font-semibold text-[16px] lh-[28.72px] text-white mb-3">
                        Gilded Token:
                      </li>
                      <li className="mb-[6px]">
                        <a
                          href=""
                          className="font-Josefin font-normal text-[16px] lh-[28.72px] text-[#B5B6B6] hover:underline transition-all duration-300 ease-in-out"
                        >
                          Etherscan.io
                        </a>
                      </li>
                      <li className="mb-[6px]">
                        <a
                          href=""
                          className="font-Josefin font-normal text-[16px] lh-[28.72px] text-[#B5B6B6] hover:underline transition-all duration-300 ease-in-out"
                        >
                          Github
                        </a>
                      </li>
                      <li>
                        <a
                          href="#uniswap"
                          className="font-Josefin font-normal text-[16px] lh-[28.72px] text-[#B5B6B6] hover:underline transition-all duration-300 ease-in-out"
                        >
                          Uniswap
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-[#A1A1A1] mt-[48.79px]"></div>
        <div className="flex items-center justify-center my-2">
          <p className="font-Josefin font-normal text-[16px] leading-[28.72px] text-[#999999]">
            © Copyright $GILD {year}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
