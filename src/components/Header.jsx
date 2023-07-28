import PropTypes from "prop-types";
import Typical from "react-typical";
// import darkModeImg from "../assets/darkmode.svg";
// import lightModeImg from "../assets/lightmode.svg";
// import { useState, useEffect } from "react";

const Header = ({ section, click }) => {
  return (
    <section className="w-full fixed z-50 bg-black bg-opacity-90 h-24 flex items-center justify-between">
      <h2 className="font-bold text-white text-4xl ml-10 cursor-pointer rounded-full">
        <Typical steps={[section]} />
      </h2>
      <div className="mr-10 [&>a]:m-4 [&>a]:text-white [&>a]:cursor-pointer [&>a:hover]:text-yellow-400 [&>a]:text-xl flex items-center">
        <a href="/#Home" onClick={click}>
          Home
        </a>
        <a href="/#AboutMe" onClick={click}>
          About me
        </a>
        <a href="/#SoftSkills" onClick={click}>
          Soft skills
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
        {/* {isDarkMode && (
          <img
            src={darkModeImg}
            onClick={changeMode}
            className="h-8 bg-white rounded-full cursor-pointer"
            alt=""
          />
        )} */}
        {/* <img
          src={lightModeImg}
          onClick={changeMode}
          className="h-8 bg-white rounded-full cursor-pointer"
          alt=""
        /> */}
      </div>
    </section>
  );
};

Header.propTypes = {
  section: PropTypes.string,
  click: PropTypes.func,
  darkMode: PropTypes.bool,
  changeMode: PropTypes.func,
};

export default Header;
