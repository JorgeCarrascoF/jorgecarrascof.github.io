import Menu from "./Menu";
import PropTypes from "prop-types";
import Typical from "react-typical";

const Header = ({ section, click }) => {

  return (
    <section className="w-full fixed z-50 bg-black bg-opacity-90 h-[100px] flex items-center justify-between">
      <h2 className="font-bold text-white text-2xl sm:text-3xl xl:text-4xl ml-10 cursor-pointer rounded-full">
        <Typical steps={[section]} />
      </h2>
      <div className="overflow-visible max-h-9 mr-4">
      <Menu click={click}></Menu>
      </div>
    </section>
  );
};

Header.propTypes = {
  section: PropTypes.string,
  click: PropTypes.func,
};

export default Header;
