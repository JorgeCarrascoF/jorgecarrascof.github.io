import PropTypes from "prop-types";

const AboutMe = ({ hover }) => {
  const greeting = `<Hello World!/>`;

  return (
    <section
      id="About Me"
      onMouseEnter={hover}
      className="h-auto w-full bg-black flex flex-col items-center justify-evenly p-10 sm:py-20"
    >
      <div className="w-full 2xl:w-[40%] xl:w-[50%] lg:w-[60%] mt-24 h-auto text-white rounded-lg p-5">
        <h1 className="text-2xl font-semibold text-center text-yellow-400 mb-4 md:text-4xl lg:text-3xl xl:text-4xl">
          {greeting}
        </h1>
        <p className="text-base text-center md:text-xl lg:text-lg">
          My name is Jorge Carrasco, and I&apos;m from Spain. I got interested
          in Software Development a couple years ago, and managed to start
          learning it while working in an tech-unrelated job. Right now I&apos;m
          studying a Computer Science Degree in my local college, and I&apos;m
          looking for a trainee/junior position where I can consolidate all the
          things I&apos;ve learned, as well as expanding my knowledge in every
          possible direction.
        </p>
      </div>
      <div className="w-full flex flex-col items-center justify-center mb-16 md:flex-row md:items-start">
        <div className="w-auto border-white ml-14 2xl:w-[25%] xl:w-[30%] lg:w-[40%] text-white mt-12 md:ml-10">
          <h1 className="font-semibold text-2xl text-yellow-400 xl:text-4xl">
            .hobbies {`{`}
          </h1>
          <ul className="p-4 text-base md:text-lg">
            <li>🔭 Learning new topics</li>
            <li>🍃 Nature trips</li>
            <li>🎮 Videogames</li>
            <li>🎨 Design</li>
            <li>💡 Trying new projects</li>
            <li>👾 Board games nights</li>
            <li>💻 And coding! (of course...)</li>
          </ul>
          <h1 className="font-semibold text-2xl text-yellow-400 xl:text-4xl">{`}`}</h1>
        </div>
        <div className="w-auto ml-14 text-white mt-12 2xl:w-[25%] xl:w-[30%] lg:w-[40%] md:ml-10">
          <h1 className="font-semibold text-2xl text-yellow-400 xl:text-4xl">
            moreInfo() {`{`}
          </h1>
          <ul className="p-4 text-base md:text-lg">
            <li>
              <span className="text-yellow-400">const</span> drivingLicense =
              true;
            </li>
            <li>
              <span className="text-yellow-400">const</span> flexibleSchedules =
              true;
            </li>
            <li>
              <span className="text-yellow-400">const</span>{" "}
              inmediateAvailability = true;
            </li>
            <li>
              <span className="text-yellow-400">const</span> spanishLevel = [
              <span className="text-yellow-400">★★★★★</span>];
            </li>
            <li>
              <span className="text-yellow-400">const</span> englishLevel = [
              <span className="text-yellow-400">★★★</span>★★];
            </li>
            <li>
              <span className="text-yellow-400">let</span> location = Cáceres,
              Spain;
            </li>
          </ul>
          <h1 className="font-semibold text-2xl text-yellow-400 xl:text-4xl">{`}`}</h1>
        </div>
      </div>
    </section>
  );
};

AboutMe.propTypes = {
  hover: PropTypes.func,
};

export default AboutMe;
