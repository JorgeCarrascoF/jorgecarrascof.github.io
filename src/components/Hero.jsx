import heroImg from "../assets/heroImg2.jpeg";
import mailImg from '../assets/mail.svg'
import githubImg from '../assets/github.svg'
import linkedinImg from '../assets/linkedin.svg'
import bgImg from '../img/background.gif';

import PropTypes from 'prop-types'


const Hero = ({hover}) => {
  return (
    <section
    onMouseEnter={hover}
      id="Home"
      className="h-screen flex flex-col-reverse justify-evenly items-center bg-cover px-10 mb-10 lg:flex-row"
    >
      <div className="text-center mt-6 text-white text-2xl lg:w-1/3  lg:text-left md:w-3/4 md:mt-4 lg:mt-32 animate-fade-right">
        <h1 className="font-semibold sm:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-8 ">Jorge Carrasco</h1>
        <h1 className="font-semibold mb-8 sm:mb-10 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-4xl text-yellow-400">
          Software Developer
        </h1>
        <p className="text-base lg:text-left font-[350] md:text-center md:text-xl lg:text-lg xl:text-2xl">
          Hi! My name is Jorge, and this is my WebDev resume. I&apos;m a
          Software Development student looking for a trainee/junior experience
          in web development, either in a frontend or a backend position.
        </p>
        <h3 className="text-lg mt-12 ml-2 mb-2 text-white font-semibold lg:text-xl xl:text-2xl">Contact me!</h3>
        <div className="flex p-2 [&>a]:mx-1 w-full justify-center sm:[&>a]:mb-10 lg:w-3/6 xl:w-2/6 xl:justify-between  ">
            <a href="mailto:jorgecarfacpsico@gmail.com"><img className="cursor-pointer h-12 sm:h-10 md:h-14 lg:h-10" src={mailImg}></img></a>
            <a href="https://github.com/JorgeCarrascoF" target="_blank" rel="noreferrer"><img className="cursor-pointer h-12 sm:h-10 md:h-14 lg:h-10"  src={githubImg}></img></a>
            <a href="https://www.linkedin.com/in/jorge-carrasco-facundo/" target="_blank" rel="noreferrer"><img className="cursor-pointer h-12 sm:h-10 md:h-14 lg:h-10"  src={linkedinImg}></img></a>
        </div>
      </div>
      <img
        className="h-64 mt-60 sm:mt-80 sm:h-52 md:mt-24 md:h-96 lg:mt-0 xl:h-[30rem] border-yellow-400 border-[10px] lg:h-80 rounded-full animate-fade-left"
        src={heroImg}
      ></img>
      <img className="absolute h-full object-cover w-full -z-10" src={bgImg}></img>
    </section>
  );
};

Hero.propTypes = {
  hover: PropTypes.func,
}

export default Hero;
