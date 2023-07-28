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

const portfolioArray = [
  {
    title: "Rock-Paper-Scissors",
    level: 3,
    img: <img src={rockPaperScissorsImg}></img>,
  },
  {
    title: "Etch-a-Sketch",
    level: 2,
    img: <img src={etchASketchImg}></img>,
  },
  {
    title: "Number Match",
    level: 1,
    img: <img src={numberMatchImg}></img>,
  },
  {
    title: "My first CV",
    level: 3,
    img: <img src={myFirstCVImg}></img>,
  },
  {
    title: "Restaurant Page",
    level: 1,
    img: <img src={restaurantPageImg}></img>,
  },
  {
    title: "Tic-Tac-Toe",
    level: 2,
    img: <img src={ticTacToeImg}></img>,
  },
  {
    title: "To Do List",
    level: 3,
    img: <img src={toDoListImg}></img>,
  },
  {
    title: "Weather App",
    level: 2,
    img: <img src={weatherAppImg}></img>,
  },
  {
    title: "Admin Dashboard",
    level: 1,
    img: <img src={adminDashboardImg}></img>,
  },
  {
    title: "Tic-Tac-Toe React",
    level: 1,
    img: <img src={ticTacToeReactImg}></img>,
  },
  {
    title: "Memory Game",
    level: 2,
    img: <img src={memoryGameImg}></img>,
  },
  {
    title: "Pentathlon",
    level: 3,
    img: <img src={pentathlonImg}></img>,
  },
];

const Portfolio = () => {
  const array = portfolioArray.map((e) => {
    return (
      <div
        key={e.title}
        className={`row-span-1 aspect-video rounded-xl border-2 relative border-yellow-400 cursor-pointer overflow-hidden dark:bg-neutral-900 ${
          e.level === 3
            ? "col-span-3 row-span-3"
            : e.level === 2
            ? "col-span-2 row-span-2"
            : ""
        }`}
      >
        {/* <h1 className='text-base text-white absolute z-10 w-full bg-black text-center'>{e.title}</h1> */}
        {e.img}
      </div>
    );
  });

  return (
    <div
      id="Portfolio"
      className="text-white flex flex-col items-center py-28 h-10/12 w-full bg-black"
    >
      <p className="bg-[#161616] font-semibold text-xl p-8 mb-12 w-6/12 tracking-wider">
        The projects of my portfolio are sorted from oldest to newest. The
        bigger projects are the ones are enjoyed the most doing them, either
        because their difficulty introduced interesting concepts, or because
        their theme.
      </p>
      <div className="h-auto w-10/12 grid auto-rows grid-cols-6 gap-4">
        {array}
      </div>
    </div>
  );
};

export default Portfolio;
