import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import SoftSkills from "./components/SoftSkills";
import Tools from "./components/Tools";
import Studies from "./components/Studies";
import Courses from "./components/Courses";

import { useState } from "react";

import foundationsImg from './assets/foundationsTOP.svg'
import javascriptImg from './assets/javascriptTOP.svg'
import javascriptUdemyImg from './assets/jsUdemy.png'

import problemSolvingImg from './img/problemSolving.png'
import creativeThinkingImg from './img/creativeThinking.png'
import perseveranceImg from './img/perseverance.png'
import adaptabilityImg from './img/adaptability.png'
import timeManagementImg from './img/timeManagement.png'

import VSCodeIcon from "./assets/vscode.svg";
import eclipseIcon from "./assets/eclipse.png";
import githubIcon from "./assets/github.svg";
import htmlIcon from "./assets/html.svg";
import reactIcon from "./assets/react.svg";
import angularIcon from "./assets/angular.svg";
import cssIcon from "./assets/css.svg";
import tailwindIcon from "./assets/tailwind.svg";
import jsIcon from "./assets/js.svg";
import tsIcon from "./assets/ts.svg";
import mysqlIcon from "./assets/database.svg";
import cplusplusIcon from "./assets/c++.png";
import aiIcon from "./assets/ai.png";
import psIcon from "./assets/ps.png";
import officeIcon from "./assets/office.png";
import Portfolio from "./components/Portfolio";



const studiesArray = [
  {
    title: 'Game Design in Unity',
    institution: 'Viral Studios',
    date: 'March - April 2018',
    description: 'My first contact with code, where I learned fundamental concepts as well as basic Unity knowledge and how to design a game from scratch.',
    link: 'https://viralstudios.es/',
  },
  {
    title: 'Web FullStack',
    institution: 'Core NetWorks',
    date: 'May - July 2022',
    description: 'I was able to explore both backend and frontend sides of webdev and use actual technologies like Angular and Postman.',
    link: 'https://www.corenetworks.es/',
  },
  {
    title: 'CS College Degree',
    institution: 'UNEX',
    date: '2022 - Currently enrolled',
    description: 'Started a CS degree in September 2022 to form myself as a software engineer and learn more deep concepts about programming.',
    link: 'https://www.unex.es/',
  }
]

const coursesArray = [
  {
    title: 'WebDev Foundations',
    img: <img src={foundationsImg}></img>,
    institution: 'The Odin Project',
    date: 'July - August 2022',
    description: 'Foundations helped me to expand my knowledge of the tools used in frontend development by providing several projects with a lot of educational value.',
    link: 'https://www.theodinproject.com/paths/foundations/courses/foundations',
  },
  {
    title: 'FullStack JavaScript',
    img: <img src={javascriptImg}></img>,
    institution: 'The Odin Project',
    date: 'Working on it! 🖥️',
    description: 'Things started to fire up in this course! Learned really useful stuff like React, NodeJS and some CSS tricks to make things look smoother.',
    link: 'https://www.theodinproject.com/paths/full-stack-javascript',
  },
  {
    title: 'JavaScript Complete Guide',
    img: <img src={javascriptUdemyImg}></img>,
    institution: 'Academind',
    date: 'Next step! 🚀',
    description: `Althought I'm not dissatisfied with my current knowledge, I decided to start this course to explore every hidden corner of the JavaScript universe.`,
    link: 'https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/',
  },
]

const softSkillsArray = [
  {
    title: 'Problem solving',
    img: <img src={problemSolvingImg}></img>,
  },
  {
    title: 'Creative thinking',
    img: <img src={creativeThinkingImg}></img>,
  },
  {
    title: 'Perseverance',
    img: <img src={perseveranceImg}></img>,
  },
  {
    title: 'Adaptability',
    img: <img src={adaptabilityImg}></img>,
  },
  {
    title: 'Time management',
    img: <img src={timeManagementImg}></img>,
  }
]

const toolsArray = [
  {
    title: 'VS Code',
    img: <img src={VSCodeIcon}></img>,
    confidence: 3,
    desc: 'Main IDE that I use for personal projects, and the one I find myself more comfortable with for its versatility. My first option (if I can choose).',
  },
  {
    title: 'Eclipse',
    img: <img src={eclipseIcon}></img>,
    confidence: 2,
    desc: 'The IDE I use for educational purposes and college projects. Currently working with it to learn C++ and OOP.'
  },
  {
    title: 'Github',
    img: <img src={githubIcon}></img>,
    confidence: 3,
    desc: `The Git repository I'm more used to. It's also where I push all my personal projects (and where this resume is hosted).`
  },
  {
    title: 'HTML5',
    img: <img src={htmlIcon}></img>,
    confidence: 3,
    desc: `Base for all my projects. I may or may not be recovering from a severe "divitis" (I'll let you be the judge).`
  },
  {
    title: 'React',
    img: <img src={reactIcon}></img>,
    confidence: 3,
    desc: `Main JS library I can work with. I find it greatly intuitive to use, and like its Component-Based Development a lot!`
  },
  {
    title: 'Angular',
    img: <img src={angularIcon}></img>,
    confidence: 1,
    desc: 'Framework I worked with during my Web Fullstack course by Core NetWorks. I find React more useful and satisfying, but enjoyed the experience too.',
  },
  {
    title: 'CSS3',
    img: <img src={cssIcon}></img>,
    confidence: 3,
    desc: `Main way to style my projects. Comfortable with flexbox principles. I really like its animations features. Also worked with SASS, but can't say I'm more used to it (yet).`
  },
  {
    title: 'Tailwind',
    img: <img src={tailwindIcon}></img>,
    confidence: 2,
    desc: `First CSS framework I've encountered. As far as I've seen, I like its simplicity and sturdiness, but I'm not using it on every project ahead.`
  },
  {
    title: 'JavaScript',
    img: <img src={jsIcon}></img>,
    confidence: 3,
    desc: `Currently my preferred language to work with. Before React and JSX, it was my way to script my projects for extra functionalities.`
  },
  {
    title: 'TypeScript',
    img: <img src={tsIcon}></img>,
    confidence: 1,
    desc: `Briefly met it during the Web FullStack course. Used it with Angular to develop a store app. I really liked its structure and found it comfortable to learn.`
  },
  {
    title: 'MySQL',
    img: <img src={mysqlIcon}></img>,
    confidence: 1,
    desc: `The database I used for the store app I developed with Angular. Really comfortable to start with. I also used Postman to test the database and apirest together.`
  },
  {
    title: 'C++',
    img: <img src={cplusplusIcon}></img>,
    confidence: 3,
    desc: `I use it regularly in my college projects, and it's my main basis to learn OOP. The only language I use Eclipse for. I find its pointers and memory management very convenient to learn and work with.`
  },
  {
    title: 'Illustrator',
    img: <img src={aiIcon}></img>,
    confidence: 2,
    desc: `I find it a more comfortable tool than PS, so it's my main program in personal projects non-web related. I use it un hobbies like map-making or layout design, among others. Also worked briefly with InDesign.`
  },
  {
    title: 'Photoshop',
    img: <img src={psIcon}></img>,
    confidence: 2,
    desc: `I use it as a support tool for my personal projects, and also to edit the icons/imgs I work with. Not for my daily use, but always there when I need it.`
  },
  {
    title: 'Office',
    img: <img src={officeIcon}></img>,
    confidence: 4,
    desc: `Most versatile toolkit that allows me to organize my projects and keep track of how I want things done.`
  },
]

function App() {
  const [title, setTitle] = useState('</>')
  

  const handleClick = (e) => {
    setTitle(`<${e.target.innerText}/>`)
  }


  return (
    <>
      <div className="w-screen h-screen flex-col items-center overflow-x-hidden scroll-smooth">
        <Header section={title} click={handleClick}></Header>
        <Hero></Hero>
        <AboutMe></AboutMe>
        <SoftSkills array={softSkillsArray}></SoftSkills>
        <Tools array={toolsArray}></Tools>
        <Studies array={studiesArray}></Studies>
        <Courses array={coursesArray}></Courses>
        <Portfolio></Portfolio>
      </div>
    </>
  );
}

export default App;
