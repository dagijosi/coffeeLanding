import React, { useState } from "react";
import { cn } from "./cn";
import Button from "./Button";
import Drawer from "./Drawer";
import { IoIosCloseCircleOutline } from "react-icons/io";

type ClassNames = {
  brandClassName?: string;
  linksWrapperClassName?: string;
  linkClassName?: string;
  startContentClassName?: string;
  endContentClassName?: string;
  drawerClassName?: string;
};

interface NavbarProps {
  brandName?: string;
  brandClick?: () => void;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  links?: { label: string; href: string; target?: string }[];
  className?: string;
  background?: string;
  textColor?: string;
  classNames?: ClassNames;
  activeLink?: string; // Add activeLink prop
  onLinkClick?: (href: string) => void; // Add onLinkClick prop
}

const Navbar: React.FC<NavbarProps> = ({
  brandName = "Brand",
  brandClick = () => {},
  startContent ,
  endContent = (
    <Button className="bg-transparent border border-gray-300 p-1 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    </Button>
  ),
  links = [],
  className,
  background = "bg-gray-100",
  textColor = "text-black",
  classNames,
  activeLink,
  onLinkClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={cn(
        "p-4 flex justify-between items-center ",
        background,
        textColor,
        className
      )}
      aria-label="Main navigation" // Add aria-label
    >
      {/* Start Content & Brand */}
      <div
        className={cn(
          "flex items-center space-x-2",
          classNames?.startContentClassName
        )}
        onClick={brandClick}
      >
        {startContent && <div>{startContent}</div>}
        <span className={cn("font-bold text-lg", classNames?.brandClassName)}>
          {brandName}
        </span>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="md:hidden">
        <Button
          className="bg-transparent text-gray-600 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Open menu" // Add aria-label
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12" // X (close icon)
                  : "M4 6h16M4 12h16M4 18h16" // Hamburger (open icon)
              }
            />
          </svg>
        </Button>
      </div>

      {/* Links */}
      <ul
        className={cn(
          "hidden md:flex space-x-4",
          classNames?.linksWrapperClassName
        )}
      >
        {links.map((link, index) => (
          <li key={index} className={cn(classNames?.linkClassName,activeLink === link.href ? "text-blue-500" : "")}>
            <a
              href={link.href}
              target={link.target || "_self"}
              aria-current={activeLink === link.href ? "page" : undefined} // Add aria-current
              onClick={() => onLinkClick && onLinkClick(link.href)} // Add onClick handler
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* End Content */}
      <div className={cn("hidden md:block", classNames?.endContentClassName)}>
        {endContent}
      </div>

      {/* Mobile Menu (Visible on small screens) */}
      {isOpen && (
        <Drawer
          isOpen={isOpen}
          onClose={() => toggleMenu()}
          closeIcon={<IoIosCloseCircleOutline className="text-3xl ml-4" />}
          className={cn("px-4 h-screen", background, textColor, className,classNames?.drawerClassName)}
        >
          <div className={cn("space-y-6", classNames?.startContentClassName)}>
            <span
              className={cn(
                "flex items-center gap-2 text-xl font-bold",
                classNames?.brandClassName
              )}
            >
              {brandName}
            </span>
            <nav
              className={cn(
                "flex flex-col space-y-4 py-10 w-full overflow-y-auto md:scrollbar-hide",
                classNames?.linksWrapperClassName
              )}
              aria-label="Mobile navigation" // Add aria-label
            >
              <ul>
                {links.map((link, index) => (
                  <li
                    key={index}
                    className={cn(
                      "flex items-center px-4 py-3 border-l border-gray-200 rounded group hover:border-l hover:border-purple-900 hover:text-purple-700",
                      classNames?.linkClassName
                    )}
                  >
                    <a
                      href={link.href}
                      target={link.target || "_self"}
                      aria-current={
                        activeLink === link.href ? "page" : undefined
                      } // Add aria-current
                      onClick={() => {
                        onLinkClick && onLinkClick(link.href); // Add onClick handler
                        toggleMenu(); // Close the menu after clicking a link
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={cn(classNames?.endContentClassName)}>
              {endContent}
            </div>
          </div>
        </Drawer>
      )}
    </nav>
  );
};

export default Navbar;
