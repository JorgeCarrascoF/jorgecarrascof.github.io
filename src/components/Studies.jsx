import Card from "./Card";
import PropTypes from "prop-types";

import dropButton from "../assets/dropdown.svg";
import { useState } from "react";

const Studies = ({ array, hover }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    let newOpen = !isOpen;
    setIsOpen(newOpen);
  };

  const studiesArray = (
    <div className="w-10/12 mt-12 flex flex-col items-center justify-center lg:flex-row">
      {array.map((e) => {
        return (
          <Card
            type="study"
            title={e.title}
            key={e.title}
            institution={e.institution}
            date={e.date}
            desc={e.description}
            link={e.link}
          />
        );
      })}
    </div>
  );

  return (
    <section
      id="Studies"
      onMouseEnter={hover}
      className="w-full bg-black flex flex-col pt-4 pb-16 items-center justify-center"
    >
      {studiesArray}
      <div className="w-10/12 bg-[#161616] text-white mt-8 flex flex-col items-center rounded-lg md:w-10/12 lg:w-8/12">
        <h1
          onClick={handleClick}
          className="w-full text-base flex flex-wrap cursor-pointer font-semibold p-[0.7rem] text-center 2xl:text-2xl  xl:text-xl lg:text-base md:text-2xl md:p-6 justify-center items-center [&>span]:text-yellow-400"
        >
          What&apos;s my actual distinction between&nbsp;<span>studies</span>
          &nbsp;and&nbsp;<span>courses</span>?
          <img
            src={dropButton}
            className={`${
              isOpen
                ? "h-8 ml-0 rotate-180 transition-all"
                : "h-8 ml-0 transition-all"
            } sm:h-8`}
          ></img>
        </h1>
        {isOpen && (
          <p className="text-base text-center [&>span]:text-yellow-400 xl:text-lg w-10/12 py-6 lg:py-6 sm:text-lg lg:text-base">
            The distinction I made is based on two parameters: if it&apos;s{" "}
            <span>regulated</span>, and if it&apos;s <span>self-taught</span>.
            Every study listed above is regulated and had a tutor I could go ask
            about any problem that I may encounter through the learning. On the
            other hand, the courses listed below are online courses that I was
            able to keep learning wherever and whenever I felt to. Even if the
            studies had more support for me, I felt the courses to be more
            challenging and, by extension, rewarding.
          </p>
        )}
      </div>
    </section>
  );
};

Studies.propTypes = {
  array: PropTypes.array,
  hover: PropTypes.func,
};

export default Studies;
