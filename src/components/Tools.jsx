import { useState } from "react";
import Card from "./Card";
import PropTypes from "prop-types";

import dropButton from '../assets/dropdown.svg'

const Tools = ({ array, hover }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    let newOpen = !isOpen;
    setIsOpen(newOpen);
  }

  const toolsArray = (
    <div className="w-10/12 mt-12 flex flex-row flex-wrap items-center justify-evenly">
      {array.map((e) => {
        return (
          <Card
            type="tool"
            title={e.title}
            img={e.img}
            key={e.title}
            desc={e.desc}
            stars={e.confidence}
          />
        );
      })}
    </div>
  );

  return (
    <section
      id="Tools"
      onMouseEnter={hover}
      className="h-auto bg-black py-12 flex flex-col justify-center items-center"
    >
      <div className="w-full flex items-center justify-center">
        {toolsArray}
      </div>
      <div className="w-5/6 xl:w-9/12 rounded-lg flex flex-col items-center justify-center m-12 text-white bg-[#161616] hover:bg-[#242424] sm:w-9/12" >
        <h1 onClick={toggleOpen} className="w-full font-semibold text-lg p-3 text-center flex justify-center items-center cursor-pointer xl:text-2xl md:text-2xl ">
          But... what&apos;s <span className="text-yellow-400 ml-2">confidence</span>
          ?
          <img className={`${isOpen ? 'h-8 ml-1 rotate-180 transition-all' : 'h-8 ml-1 transition-all'}`} src={dropButton}></img>
        </h1>
        {isOpen && (
          <div className="flex w-11/12 flex-col items-start [&>*]:mx-0 p-4 border-t-[1px] border-yellow-400 justify-between lg:flex-row">
            <p className="text-base text-center xl:w-5/12 lg:w-5/12 md:text-lg lg:text-base lg:mt-5">
              Confidence is a star-rated measure of how comfortable I feel using
              these tools. Giving each tool a number of 1-5 stars allows me to
              externalize how I know the tool, how many projects I&apos;ve built
              with it and what can you expect from me when I encounter this tool
              again. Of course, confidence changes over time, depending how up
              to date I am with the tool and how much time has passed since the
              last time I worked with it. <br />
              <br />
              <span className="text-yellow-400 text-base font-semibold md:text-lg xl:w-11/12 xl:text-lg lg:text-base">
                Confidence isn&apos;t just a way for you to know me and my
                confort zone, but also a way for me to know which boundaries to
                push further.
              </span>
            </p>
            <ul className="mt-8 xl:w-6/12 [&>li]:mb-4 [&>li]:text-sm md:w-full md:mt-4 xl:mt-0 sm:[&>li]:text-sm  md:[&>li]:text-lg lg:[&>li]:text-base lg:w-6/12">
              <li>
                Level 1 (<span className="text-yellow-400">★</span>): I&apos;ve
                encountered the tool in a very basic way. I know its fundamental
                pros and cons, and managed to work with it in a surface level.
                Depending on the tool, this means I&apos;ve worked with it
                between less than a week and over a month. I will need help to
                manage through some aspects of the tool, which are totally
                unknown for me.
              </li>
              <li>
                Level 2 (<span className="text-yellow-400">★★</span>): I&apos;ve
                experimented a few tweaks and tricks of the tool, and can work
                with it in a personal project, but in a slower pace than
                expected. I spend a lot of time researching for functionalities
                of the tool.
              </li>
              <li>
                Level 3 (<span className="text-yellow-400">★★★</span>): I feel
                comfortable enough with the tool to consider it a proper way to
                manage bigger projects, but I&apos;ll probably need to ask for
                help or do some researching for certain aspects of the tool. If
                I think of a project that feels appropiate for this tool,
                I&apos;ll consider the tool the first choice for it immediately.
              </li>
              <li>
                Level 4 (<span className="text-yellow-400">★★★★</span>): The
                tool belongs to my daily basis, both for work and personal
                projects, and I find myself able to work with it for every
                aspect of the project. The ammount of researching needed is
                greatly decreased.
              </li>
              <li>
                Level 5 (<span className="text-yellow-400">★★★★★</span>): I feel
                strong enough with the tool to work with it with almost zero
                research, and my mind has adapted to how the tool works and how
                to solve problems that in lower levels could&apos;ve costed me
                more time.
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

Tools.propTypes = {
  array: PropTypes.array,
  hover: PropTypes.func
};

export default Tools;
