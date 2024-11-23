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
        className="bg-transparent px-4 md:px-8 lg:px-14 py-4 md:py-6"
        links={[
          { label: "Home", href: "/home" },
          { label: "Menu", href: "/menu" },
          { label: "About Us", href: "/about" },
          { label: "Contact Us", href: "/contact" },
        ]}
        endContent={
          <div className="hidden md:flex items-center gap-4 lg:gap-10 text-sm">
            <a className="hover:text-[#feb850] cursor-pointer">Sign In</a>
            <Button className="bg-[#F9C06A] hover:bg-[#feb850] rounded-3xl text-black">
              SignUp
            </Button>
          </div>
        }
        classNames={{
          brandClassName: "font-clicker text-2xl md:text-3xl",
          linkClassName: "text-sm hover:text-[#feb850]",
          linksWrapperClassName: "gap-4 lg:gap-10",
        }}
      />
        <Description/>
    </div>
  );
};

export default TopPart;
