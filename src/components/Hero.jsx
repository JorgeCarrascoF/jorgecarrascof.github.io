import heroImg from "../assets/heroImg2.jpeg";
import mailImg from '../assets/mail.svg'
import githubImg from '../assets/github.svg'
import linkedinImg from '../assets/linkedin.svg'

const Hero = () => {
  return (
    <section
      id="Home"
      className="h-screen flex bg-hero justify-evenly items-center bg-cover px-10"
    >
      <div className="w-1/3 text-white text-2xl text-left">
        <h1 className="font-semibold mb-8">Jorge Carrasco</h1>
        <h1 className="font-semibold mb-8 text-5xl text-yellow-400">
          Software Developer
        </h1>
        <p className="text-justify font-[350]">
          Hi! My name is Jorge, and this is my WebDev resume. I&apos;m a
          Software Development student looking for a trainee/junior experience
          in web development, either in a frontend or a backend position.
        </p>
        <h3 className="mt-12 ml-2 mb-2 text-white font-semibold">Contact me!</h3>
        <div className="w-2/6 flex justify-between p-2 ">
            <a href="mailto:jorgecarfacpsico@gmail.com"><img className="cursor-pointer h-12" src={mailImg}></img></a>
            <a href="https://github.com/JorgeCarrascoF" target="_blank" rel="noreferrer"><img className="cursor-pointer h-12"  src={githubImg}></img></a>
            <a href="https://www.linkedin.com/in/jorge-carrasco-facundo/" target="_blank" rel="noreferrer"><img className="cursor-pointer h-12"  src={linkedinImg}></img></a>
        </div>
      </div>
      <img
        className=" max-h-96 border-yellow-400 border-[10px] rounded-full align transition-all ease-in-out"
        src={heroImg}
      ></img>
    </section>
  );
};

export default Hero;
