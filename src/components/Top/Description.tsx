import React from "react";
import Button from "../../common/Button";

const Description: React.FC = () => {
  return (
    <div className="absolute top-[55%] left-4 md:left-12 lg:left-24 -translate-y-1/2">
      <div className="text-white w-full md:w-[35rem] space-y-4 md:space-y-8">
        <h2 className="font-medium font-playfair text-xl md:text-2xl tracking-wide pl-1">
          Experience the Perfect Start
        </h2>
        <h1 className="font-clicker text-7xl sm:text-9xl md:text-[13rem] leading-[1] md:leading-[11rem] text-[#F9C06A] -ml-1 md:-ml-3">
          Coffee
        </h1>
        <p className="font-playfair text-base md:text-lg leading-relaxed pl-1 max-w-[20rem] sm:max-w-[25rem] md:max-w-[32rem]">
          Indulge in our expertly crafted coffee, where every sip tells a story
          of carefully selected beans and masterful brewing. From rich espressos
          to velvety lattes, discover flavors that transform your morning into
          an extraordinary experience.
        </p>
      </div>
      <Button className="bg-[#F9C06A] hover:bg-[#feb850] text-base font-medium px-10 py-3.5 rounded-3xl mt-10 ml-1 text-black transition-all duration-300 hover:shadow-lg">
        Order Your Perfect Brew
      </Button>
    </div>
  );
};

export default Description;
