import PropTypes from "prop-types";
import Card from "./Card";

const Courses = ({ array }) => {
  
  const coursesArray = (
    <div className="w-10/12 mt-12 [&>li]:text-xl [&>li]:mb-4 flex items-center justify-center">
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
      className="h-auto bg-yellow-400 pt-8 flex flex-row justify-evenly"
    >
      {coursesArray}
    </section>
  );
};

Courses.propTypes = {
  array: PropTypes.array,
}

export default Courses;
