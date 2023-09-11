import PropTypes from "prop-types";

const Card = ({ title, img, type, stars, institution, date, desc, link }) => {
  // modified SVG icons
  let arrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgb(250 204 21)"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
  let book = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="rgb(250 204 21)"
      viewBox="0 0 24 24"
      stroke="none"
    >
      <path d="M17.5 14.33C18.29 14.33 19.13 14.41 20 14.57V16.07C19.38 15.91 18.54 15.83 17.5 15.83C15.6 15.83 14.11 16.16 13 16.82V15.13C14.17 14.6 15.67 14.33 17.5 14.33M13 12.46C14.29 11.93 15.79 11.67 17.5 11.67C18.29 11.67 19.13 11.74 20 11.9V13.4C19.38 13.24 18.54 13.16 17.5 13.16C15.6 13.16 14.11 13.5 13 14.15M17.5 10.5C15.6 10.5 14.11 10.82 13 11.5V9.84C14.23 9.28 15.73 9 17.5 9C18.29 9 19.13 9.08 20 9.23V10.78C19.26 10.59 18.41 10.5 17.5 10.5M21 18.5V7C19.96 6.67 18.79 6.5 17.5 6.5C15.45 6.5 13.62 7 12 8V19.5C13.62 18.5 15.45 18 17.5 18C18.69 18 19.86 18.16 21 18.5M17.5 4.5C19.85 4.5 21.69 5 23 6V20.56C23 20.68 22.95 20.8 22.84 20.91C22.73 21 22.61 21.08 22.5 21.08C22.39 21.08 22.31 21.06 22.25 21.03C20.97 20.34 19.38 20 17.5 20C15.45 20 13.62 20.5 12 21.5C10.66 20.5 8.83 20 6.5 20C4.84 20 3.25 20.36 1.75 21.07C1.72 21.08 1.68 21.08 1.63 21.1C1.59 21.11 1.55 21.12 1.5 21.12C1.39 21.12 1.27 21.08 1.16 21C1.05 20.89 1 20.78 1 20.65V6C2.34 5 4.18 4.5 6.5 4.5C8.83 4.5 10.66 5 12 6C13.34 5 15.17 4.5 17.5 4.5Z" />
    </svg>
  );

  let confidence =  ''
  for (let i = 0; i < stars; i++){
    confidence += '★';
  }

  let unconfidence = '';
  for(let i = 0; i < (5-stars); i++){
    unconfidence += '★';
  }

  

  let card;
  if (type === "soft-skill") {
    card = (
      <div className="h-auto w-[75%]  xl:w-[25%] lg:w-[25%] sm:w-[35%] md:w-[40%] md:m-5 bg-black p-5 m-10 rounded-lg flex flex-col [&>img]:rounded-lg [&>img]:mb-4 [&>img]:w-11/12 justify-center items-center">
        {img}
        <h2 className="w-full text-center text-lg font-semibold text-white border-t-[1px] pt-2 border-white sm:text-base">
          {title}
        </h2>
      </div>
    );
  } else if (type === "tool") {
    card = (
      <div className="h-auto w-full p-[0.7rem] my-4 2xl:w-[30%] xl:w-[40%] lg:w-[45%] sm:w-[65%] md:p-5 relative bg-[#161616] [&>p]:hover:inline-block hover:rounded-b-none text-white text-center text-lg font-semibold rounded-lg cursor-pointer hover:bg-[#242424]">
        <div className="flex flex-row justify-center items-center text-sm md:text-lg lg:text-base">
          <h2 className="w-3/6 border-r-[1px] border-yellow-400 flex items-center justify-start [&>img]:h-8 [&>img]:mr-4">
            {img} {title}
          </h2>
          <h2 className="ml-3 lg:ml-4 h-full sm:ml-5 md:ml-6">
            Confidence:{<span className="text-yellow-400 ml-2">{confidence}</span>}{unconfidence}
          </h2>
        </div>
        <p className="text-sm absolute w-full tracking-wide mt-0 p-6 -pt-4 rounded-b-xl hidden bg-[#242424] z-10 left-0 md:text-base">{desc}</p>
      </div>
    );
  } else if (type === "study") {
    card = (
      <div className="w-[90%] aspect-square m-4 lg:m-4 lg:w-[40%] sm:w-[65%] md:p-6 bg-[#161616] text-white text-lg p-5 rounded-lg flex flex-col justify-between items-end cursor-pointer hover:bg-[#242424]">
        <div>
          <h2 className="w-full text-lg tracking-wide 2xl:text-xl lg:text-base md:text-2xl pl-2 flex flex-col font-semibold border-b-[1px] pb-3 border-white">
            {title}{" "}
            <span className="text-yellow-400 text-sm tracking-normal 2xl:pt-2 2xl:text-lg xl:text-sm xl:mt-1 lg:text-[0.8rem] lg:mt-1 md:text-xl md:mt-1 font-normal">
              {" "}
              {institution} | {date}{" "}
            </span>
          </h2>
          <p className="mt-6 text-base mb-6 tracking-wider 2xl:text-lg  xl:text-base xl:tracking-wide lg:tracking-tight lg:text-base md:text-xl">{desc}</p>
        </div>
        <a
          className="text-white  text-sm 2xl:text-lg  xl:text-sm xl:mt-4 lg:mt-3 lg:text-[0.75rem] md:text-xl flex items-center justify-end font-normal w-full hover:text-yellow-400 mr-1"
          target="_blank"
          rel="noreferrer"
          href={link}
        >
          Learn more about the institution &nbsp;{arrow}
        </a>
      </div>
    );
  } else if (type === "course") {
    card = (
      <div className="w-[95%] m-10 [&>img]:h-32  2xl:h-[95%] xl:h-[95%] lg:h-auto lg:min-w-[33%] lg:m-5 lg:[&>img]:h-24 md:w-5/6 md:h-[25%] md:[&>img]:h-42 md:p-6 sm:w-5/6  bg-[#161616] hover:bg-[#242424] text-white text-lg p-5 rounded-lg flex flex-col justify-between items-center cursor-pointer">
        {img}
        <div className="h-[65%]">
          <h2 className="w-full text-base pl-2 mt-8 flex flex-col font-semibold border-b-[1px] pb-3 border-white 2xl:text-2xl 2xl:tracking-wide lg:text-base md:text-2xl">
            {title}{" "}
            <span className="text-yellow-400 text-sm font-normal 2xl:text-xl 2xl:tracking-normal lg:tracking-normal lg:text-[0.8rem] md:text-xl">
              {" "}
              {institution} | {date}{" "}
            </span>
          </h2>
          <p className="text-base tracking-normal my-4 xl:text-base xl:tracking-wide lg:tracking-normal lg:mt-3 lg:text-[0.9rem] md:text-xl sm:text-base">{desc}</p>
        </div>
        <a
          className="text-white flex text-sm items-center justify-end font-normal w-full hover:text-yellow-400 mr-1 md:text-xl md:mt-8 lg:text-base"
          target="_blank"
          rel="noreferrer"
          href={link}
        >
          Explore course &nbsp;{book}
        </a>
      </div>
    );
  }

  return card;
};

Card.propTypes = {
  title: PropTypes.string,
  img: PropTypes.any, // what's the correct implementation of this?
  type: PropTypes.string,
  institution: PropTypes.string,
  date: PropTypes.string,
  desc: PropTypes.string,
  link: PropTypes.string,
};

export default Card;
