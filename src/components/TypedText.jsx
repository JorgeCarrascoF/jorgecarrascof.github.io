import { useEffect } from "react";
import Typed from "typed.js";

const pathNames = {
  "/": "Home",
  "about-me": "About Me",
  projects: "Projects",
  studies: "Studies",
  tools: "Tools",
  blog: "Blog",
  experience: "Experience",
};

const slugs = {
  tiamat: "Tiamat",
  "dnd-sheet": "DnD Sheet",
  "to-dool": "To-Dool",
  buggle: "Buggle",
  undersounds: "Undersounds",
  microservices: "Microservices",
  "deep-learning": "Deep Learning",
  "cap-theorem": "CAP Theorem",
  "business-intelligence": "Business Intelligence",
  "machine-learning": "Machine Learning",
  "martin-fowler": "Martin Fowler",
};

export const TypedText = () => {
  useEffect(() => {
    const path = window.location.pathname;
    const paths = path.split("/").slice(1);

    let pathString;

    const toTitleCase = (str) => {
      return str
        .replace(/-/g, " ")
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
        )
        .join(" ");
    }

    if (paths.length === 2) {
      pathString = "&lt; " + pathNames[paths[0]] + " /&gt;";
    } else if (paths.length === 3) {
      pathString =
        "&lt; " + (slugs[paths[1]] || toTitleCase(paths[1])) + " /&gt;";
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
