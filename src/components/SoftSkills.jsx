import Card from "./Card";
import PropTypes from 'prop-types';


const SoftSkills = ({array, hover}) => {

  const softSkillsArray = (
    <div className="w-10/12 mt-12 [&>li]:text-xl [&>li]:mb-4 flex flex-wrap justify-evenly">
      {array.map((e) => {
        return (
          <Card
            type="soft-skill"
            title={e.title}
            key={e.title}
            img={e.img}
          />
        );
      })}
    </div>
  );

  return (
    <section id="Soft Skills" onMouseEnter={hover} className="h-auto w-full bg-yellow-400 py-14 flex flex-col items-center">
      {softSkillsArray}
    </section>
  );
};

SoftSkills.propTypes = {
  array: PropTypes.array,
  hover: PropTypes.func,
}

export default SoftSkills;
