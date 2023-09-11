// import openMenu from "../assets/menu.svg";
// import closeMenu from "../assets/close.svg";

import { useState } from "react";
import PropTypes from "prop-types";

const Menu = ({ click }) => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    let newState = !isOpen;
    setIsOpen(newState);
  };



  return (
    <div
      className={`h-9 w-9 shadow-lg  relative mr-2 overflow-hidden transition-all duration-500 ease-in-out border-yellow-400 rounded-lg border-2 ${
        isOpen
          ? "h-[20rem] w-[8rem] lg:h-[22rem] xl:w-36 xl:h-[22rem] bg-yellow-400"
          : ""
      }`}
    >
      <button
        className="h-8 w-8 absolute right-0 top-0 border-none rounded flex flex-col justify-center items-center [&>div]:w-7/12"
        onClick={toggleMenu}
      >
        <div className={`h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300 ${isOpen ? "rotate-45 translate-y-[0.65rem] bg-black h-[4px]" : "opacity-100 bg-yellow-400 h-[2px]  my-[3px]"}`}></div>
        <div className={`h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300 ${isOpen ? "opacity-0" : "opacity-100 bg-yellow-400 h-[2px]  my-[3px]"}`}></div>
        <div className={`h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300 ${isOpen ? "-rotate-45 -translate-y-[0.65rem] bg-black h-[4px]" : "opacity-100 bg-yellow-400  h-[2px]  my-[3px]"}`}></div>
      </button>
      <div
        className={` ${
          isOpen ? "opacity-100" : "opacity-0"
        } flex flex-col text-base ml-1 mt-9 overflow-hidden transition-opacity delay-300 [&>a]:m-2 2xl:[&>a]:text-2xl [&>a]:overflow-hidden [&>a]:min-w-fit [&>a:hover]:text-white [&>a]:text-black [&>a]:cursor-pointer[&>a]:text-xl lg:[&>a]:text-lg md:[&>a]:text-base items-left`}
      >
        <a href="/#Home" onClick={click}>
          Home
        </a>
        <a href="/#About Me" onClick={click}>
          About Me
        </a>
        <a href="/#Soft Skills" onClick={click}>
          Soft Skills
        </a>
        <a href="/#Tools" onClick={click}>
          Tools
        </a>
        <a href="/#Studies" onClick={click}>
          Studies
        </a>
        <a href="/#Courses" onClick={click}>
          Courses
        </a>
        <a href="/#Portfolio" onClick={click}>
          Portfolio
        </a>
      </div>
    </div>
  );
};

Menu.propTypes = {
  click: PropTypes.func,
};

export default Menu;
