import PropTypes from "prop-types";
import Card from "./Card";

const Courses = ({ array, hover }) => {
  
  const coursesArray = (
    <div className="w-[90%] mt-10 flex items-center justify-center flex-col lg:flex-row">
      {array.map((e) => {
        return (
          <Card
            type="course"
            title={e.title}
            img={e.img}
            key={e.title}
            institution={e.institution}
            date={e.date}
            desc={e.description}
            link={e.link}
          />
        );
      })}
    </div>
  );
  
  return (
    <section
      id="Courses"
      onMouseEnter={hover}
      className="h-auto bg-yellow-400 py-8 flex flex-col items-center justify-evenly 2xl:h-[70%] xl:h-[75%] lg:h-[80%]"
    >
      {coursesArray}
    </section>
  );
};

Courses.propTypes = {
  array: PropTypes.array,
  hover: PropTypes.func
}

export default Courses;
