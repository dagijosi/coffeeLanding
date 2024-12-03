import React from "react";
import { cn } from "../common/cn";
import Navbar from "../common/Navbar";
import Button from "../common/Button";
import Description from "../components/Top/Description";

const TopPart: React.FC = () => {
  return (
    <div
      className={cn("h-screen bg-cover")}
      style={{ backgroundImage: "url('/image/coffee_image.png')" }}
    >
      <Navbar
        brandName={"Bean Scene"}
        textColor="text-white"
        className="bg-transparent backdrop-blur-sm bg-black/5 px-4 md:px-8 lg:px-14 py-4 md:py-6 transition-all duration-300 sticky top-0 z-50"
        links={[
          { label: "Home", href: "/home" },
          { label: "Menu", href: "/menu" },
          { label: "About Us", href: "/about" },
          { label: "Contact Us", href: "/contact" },
        ]}
        endContent={
          <div className="hidden md:flex items-center gap-4 lg:gap-10 text-sm">
            <a className="hover:text-[#feb850] transition-colors duration-300 cursor-pointer">Sign In</a>
            <Button className="bg-[#F9C06A] hover:bg-[#feb850] rounded-full px-6 py-2 text-black transition-all duration-300 hover:shadow-lg hover:scale-105">
              Sign Up
            </Button>
          </div>
        }
        classNames={{
          brandClassName: "font-clicker text-2xl md:text-3xl hover:text-[#feb850] transition-colors duration-300",
          linkClassName: "text-sm hover:text-[#feb850] transition-colors duration-300 hover:border-[#feb850]",
          linksWrapperClassName: "gap-4 lg:gap-10",
          drawerClassName:"bg-black/95 backdrop-blur-md",
        }}
      />
        <Description/>
    </div>
  );
};

export default TopPart;
