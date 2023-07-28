const AboutMe = () => {
  const greeting = `<Hello World!/>`;

  return (
    <section
      id="AboutMe"
      className="h-auto w-full bg-black flex flex-col items-center justify-evenly p-8"
    >
      <div className="w-[30%] mt-24 h-auto text-white rounded-lg p-5">
        <h1 className="font-semibold text-center text-5xl text-yellow-400">{greeting}</h1>
        <p className="p-4 text-xl text-center">
          My name is Jorge Carrasco, and I&apos;m from Spain. I got interested
          in Software Development a couple years ago, and managed to start
          learning it while working in an tech-unrelated job. Right now I&apos;m
          studying a Computer Science Degree in my local college, and I&apos;m
          looking for a trainee/junior position where I can consolidate all the
          things I&apos;ve learned, as well as expanding my knowledge in every
          possible direction.
        </p>
      </div>
      <div className="w-full flex flex-row justify-evenly mb-16">
      <div className="w-[20%] text-white mt-24 rounded-lg">
        <h1 className="font-semibold text-3xl text-yellow-400">
          .hobbies {`{`}
        </h1>
        <ul className="p-4 text-xl">
          <li>🔭 Learning new topics</li>
          <li>🍃 Nature trips</li>
          <li>🎮 Videogames</li>
          <li>🎨 Design</li>
          <li>💡 Trying new projects</li>
          <li>👾 Board games nights</li>
          <li>💻 And coding! (of course...)</li>
        </ul>
        <h1 className="font-semibold text-3xl text-yellow-400">{`}`}</h1>
      </div>
      <div className="w-[20%] text-white mt-24 rounded-lg">
        <h1 className="font-semibold text-3xl text-yellow-400">
          moreInfo() {`{`}
        </h1>
        <ul className="p-4 text-xl">
          <li>
            <span className="text-yellow-400">const</span> drivingLicense =
            true;
          </li>
          <li>
            <span className="text-yellow-400">const</span> flexibleSchedules =
            true;
          </li>
          <li>
            <span className="text-yellow-400">const</span> inmediateAvailability
            = true;
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
        <h1 className="font-semibold text-3xl text-yellow-400">{`}`}</h1>
      </div>
      </div>
    </section>
  );
};

export default AboutMe;
