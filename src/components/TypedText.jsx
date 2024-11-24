import { useEffect } from "react";
import Typed from "typed.js";

const pathNames = {
  "/": "Home",
  "about-me": "About Me",
  projects: "Projects",
  studies: "Studies",
  tools: "Tools",
};

const projects = {
  tiamat: "Tiamat",
  artchive: "Artchive",
  "dnd-sheet": "DnD Sheet",
  "to-dool": "To-Dool",
  mistborn: "Mistborn Game",
};

export const TypedText = () => {
  useEffect(() => {
    const path = window.location.pathname;
    const paths = path.split("/").slice(1);

    let pathString;

    if (paths.length === 2) {
      pathString = "&lt; " + projects[paths[0]] + " /&gt;";
    } else if (paths.length === 3) {
      pathString = "&lt; " + projects[paths[1]] + " /&gt;";
    } else {
      pathString = "&lt; " + pathNames[path] + " /&gt;";
    }

    const options = {
      strings: [pathString],
      typeSpeed: 30,
      showCursor: false,
    };

    const typed = new Typed("#header", options);

    return () => {
      typed.destroy();
    };
  }, [window.location.pathname]);

  return (
    <h1
      id="header"
      style={{
        marginLeft: "20px",
        fontSize: "2rem",
        height: "2ch",
        minHeight: "2ch",
        margin: "0",
      }}
    ></h1>
  );
};
