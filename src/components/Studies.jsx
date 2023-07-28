import Card from "./Card";
import PropTypes from "prop-types";

import dropButton from "../assets/dropdown.svg";
import { useState } from "react";

const Studies = ({ array }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    let newOpen = !isOpen;
    setIsOpen(newOpen);
  };

  const studiesArray = (
    <div className="w-10/12 mt-12 [&>li]:text-xl [&>li]:mb-4 flex items-center justify-center">
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
      className="w-full bg-black flex flex-col pt-4 pb-16 items-center justify-center"
    >
      {studiesArray}
      <div className="w-7/12 bg-[#161616] text-white mt-8 flex flex-col items-center rounded-lg">
        <h1
          onClick={handleClick}
          className="w-full cursor-pointer font-semibold p-8 text-center flex justify-center tracking-wide items-center text-3xl [&>span]:text-yellow-400"
        >
          What&apos;s my actual distinction between&nbsp;<span>studies</span>
          &nbsp;and&nbsp;<span>courses</span>?
          <img
            src={dropButton}
            className={
              isOpen
                ? "h-12 ml-2 rotate-180 transition-all"
                : "h-12 ml-2 transition-all"
            }
          ></img>
        </h1>
        {isOpen && (
          <p className="text-xl [&>span]:text-yellow-400 w-10/12 tracking-wide py-8">
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
};

export default Studies;
