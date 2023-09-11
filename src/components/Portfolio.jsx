import rockPaperScissorsImg from "../img/portfolio/rock-paper-scissors.png";
import etchASketchImg from "../img/portfolio/etch-a-sketch.png";
import numberMatchImg from "../img/portfolio/numberMatch.png";
import myFirstCVImg from "../img/portfolio/my-first-cv.png";
import restaurantPageImg from "../img/portfolio/restaurant-page.png";
import ticTacToeImg from "../img/portfolio/tic-tac-toe.png";
import toDoListImg from "../img/portfolio/to-do-list.png";
import weatherAppImg from "../img/portfolio/weatherify.png";
import adminDashboardImg from "../img/portfolio/admin-dashboard.png";
import ticTacToeReactImg from "../img/portfolio/tic-tac-toe-react.png";
import memoryGameImg from "../img/portfolio/memory-game.png";
import pentathlonImg from "../img/portfolio/pentathlon.png";

import PropTypes from "prop-types";

const portfolioArray = [
  {
    title: "Rock-Paper-Scissors",
    level: 2,
    img: <img src={rockPaperScissorsImg}></img>,
    link: "https://github.com/JorgeCarrascoF/Rock-Paper-Scissors",
  },
  {
    title: "Etch-a-Sketch",
    level: 1,
    img: <img src={etchASketchImg}></img>,
    link: "https://github.com/JorgeCarrascoF/Etch-a-Sketch",
  },
  {
    title: "Number Match",
    level: 1,
    img: <img src={numberMatchImg}></img>,
    link: "https://github.com/JorgeCarrascoF/NumberMatch_Base",
  },
  {
    title: "My first Web CV",
    level: 2,
    img: <img src={myFirstCVImg}></img>,
    link: "https://github.com/JorgeCarrascoF/Resumee/",
  },
  {
    title: "Restaurant Page",
    level: 1,
    img: <img src={restaurantPageImg}></img>,
    link: "https://github.com/JorgeCarrascoF/Restaurant-Page",
  },
  {
    title: "Tic-Tac-Toe",
    level: 2,
    img: <img src={ticTacToeImg}></img>,
    link: "https://github.com/JorgeCarrascoF/Tic-Tac-Toe",
  },
  {
    title: "To Do List",
    level: 2,
    img: <img src={toDoListImg}></img>,
    link: "https://github.com/JorgeCarrascoF/ToDo-List",
  },
  {
    title: "Weather App",
    level: 2,
    img: <img src={weatherAppImg}></img>,
    link: "https://github.com/JorgeCarrascoF/Weather-App",
  },
  {
    title: "Admin Dashboard",
    level: 1,
    img: <img src={adminDashboardImg}></img>,
    link: "https://github.com/JorgeCarrascoF/Admin-Dashboard",
  },
  {
    title: "Tic-Tac-Toe React",
    level: 1,
    img: <img src={ticTacToeReactImg}></img>,
    link: "https://github.com/JorgeCarrascoF/tic-tac-toe--react-",
  },
  {
    title: "Memory Game",
    level: 2,
    img: <img src={memoryGameImg}></img>,
    link: "https://github.com/JorgeCarrascoF/Memory-Card-Game--Mistborn-Version-",
  },
  {
    title: "Pentathlon",
    level: 2,
    img: <img src={pentathlonImg}></img>,
    link: "https://github.com/JorgeCarrascoF/Pentathlon",
  },
];

const Portfolio = ({ hover }) => {
  const handleClick = (link) => {
    window.open(link);
  };

  const array = portfolioArray.map((e) => {
    return (
      <div
        key={e.title}
        onClick={() => {
          handleClick(e.link);
        }}
        className={`aspect-video rounded-xl border-2 relative border-yellow-400 cursor-pointer animate-fade-up overflow-hidden dark:bg-neutral-900 ${
          e.level === 2 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
        }`}
      >
        <div className="absolute w-full h-full bg-black hover:opacity-0 transition-opacity bg-opacity-90 flex items-center justify-center">
          <h1 className="font-semibold text-center p-8 text-[2.5rem] xl:text-4xl lg:text-[1.7rem] text-base sm:text-xl md:text-2xl lg:text-xl">
            {e.title}
          </h1>
        </div>
        {e.img}
      </div>
    );
  });

  return (
    <section
      id="Portfolio"
      onMouseEnter={hover}
      className="text-white flex flex-col items-center py-28 h-10/12 w-full bg-black"
    >
      <p className="bg-[#161616] font-semibold text-center rounded-lg text-base p-4 mb-12 w-10/12 lg:text-base md:w-8/12 md:text-xl md:p-8 xl:text-xl">
        The projects of my portfolio are sorted from oldest to newest. The
        bigger projects are the ones I enjoyed the most doing them, either
        because their difficulty introduced interesting concepts, or because
        their theme.
      </p>
      <div className="h-auto w-10/12 grid auto-rows grid-cols-2 gap-4 lg:grid-cols-4">
        {array}
      </div>
    </section>
  );
};

Portfolio.propTypes = {
  hover: PropTypes.func,
};

export default Portfolio;
