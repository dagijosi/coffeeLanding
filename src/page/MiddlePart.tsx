import React from "react";
import Button from "../common/Button";

const MiddlePart: React.FC = () => {
  return (
    <div className="relative h-[60dvh] md:h-[70dvh] lg:h-[80dvh] overflow-hidden group">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed transition-transform duration-1000 ease-out group-hover:scale-105"
        style={{ backgroundImage: "url('/image/coffee.png')" }}
      />
      <div className="absolute inset-0 bg-[#683a16]/70 backdrop-blur-[2px] transition-all duration-1000 ease-out group-hover:bg-[#683a16]/60 group-hover:backdrop-blur-[3px]" />
      <div className="relative z-10 text-white h-full flex flex-col justify-center px-6 md:px-16 lg:px-24">
        <div className="max-w-xl space-y-8 md:space-y-10 opacity-0 translate-y-10 animate-[fadeInUp_1s_ease-out_forwards]">
          <div className="space-y-3">
            <span className="inline-block text-[#F9C06A] font-medium tracking-wider text-sm md:text-base uppercase mb-2 opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">
              Special Offer
            </span>
            <h1 className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
              Get a chance to have an
              <span className="text-[#F9C06A] italic ml-2 hover:text-[#feb850] transition-colors duration-300">Amazing</span> morning
            </h1>
          </div>
          <p className="font-playfair text-base md:text-lg lg:text-xl text-gray-100/90 leading-relaxed">
            We are giving you a one time opportunity to experience a better life
            with coffee.
          </p>
          <div className="flex items-center gap-6 pt-4">
            <Button className="group inline-flex items-center bg-[#F9C06A] hover:bg-[#feb850] text-base font-medium px-8 md:px-12 py-3 md:py-4 rounded-full text-black transition-all duration-300 hover:shadow-xl hover:scale-105 hover:translate-y-[-2px]">
              Order Now
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
            <span className="text-[#F9C06A] font-medium cursor-pointer hover:text-[#feb850] transition-colors duration-300 group">
              Learn More <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 w-full md:w-1/2 h-full pointer-events-none select-none">
        <div className="relative h-full">
          <img
            src="/image/beans.png"
            alt="Coffee beans decoration"
            className="absolute bottom-0 right-0 w-[20rem] md:w-[30rem] lg:w-[35rem] object-contain opacity-90 animate-[float_4s_ease-in-out_infinite] transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
          />
          <img
            src="/image/cup.png"
            alt="Coffee cup"
            className="absolute bottom-4 right-32 md:right-36 lg:right-40 w-[15rem] md:w-[20rem] lg:w-[25rem] object-contain animate-[float-slow_4s_ease-in-out_infinite] transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default MiddlePart;
