"use client";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { VideotapeIcon } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedCursor from "react-animated-cursor";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/* Hero */}
      <div className="">
        <AnimatedCursor
           innerSize={8}
           outerSize={35}
           innerScale={1}
           outerScale={2}
           outerAlpha={0}
          
           innerStyle={{
             backgroundColor: 'black'
           }}
           outerStyle={{
             border: '2px solid black'
           }}
           
        />
        <div className="container py-24 lg:py-22">
          {/* Announcement Banner */}

          {/* End Announcement Banner */}
          {/* Title */}
          <div className="mt-5 max-w-2xl text-center mx-auto duration-500 overflow-hidden">
            <h1
              className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Crafting Digital Solutions That Spark Growth
            </h1>
          </div>
          {/* End Title */}
          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
              className="text-xl text-muted-foreground"
            >
              We&apos;re more than just developers. We&apos;re digital
              architects, crafting tailored solutions that drive your business
              forward.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 gap-3 flex justify-center overflow-hidden">
            <Button
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              size={"lg"}
            >
              Explore
            </Button>
            <Button
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              size={"lg"}
              variant={"outline"}
            >
              Have queries
            </Button>
          </div>
          {/* End Buttons */}

          <div className="flex justify-center mt-24">
            <a
              data-aos="fade-up"
              data-aos-delay="1000"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="inline-flex items-center gap-x-2 border text-sm p-1 ps-3 rounded-full transition"
              href="#"
            >
              <VideotapeIcon size={17} />
              Watch a project overview
              <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-muted-foreground/15 font-semibold text-sm">
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
};

export default Hero;
