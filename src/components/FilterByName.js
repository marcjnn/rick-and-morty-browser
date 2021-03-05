// styles & resources
import "../style/components/FilterByName.scss";
import icons from "../assets/icons";

// React
import PropTypes from "prop-types";

const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.filterResults({
      key: "name",
      value: ev.target.value,
    });
  };
  return (
    <fieldset className="nameFilter">
      <label className="search__label" htmlFor="searchByName">
        {icons.signature} name
      </label>
      <input
        className="search__input"
        id="searchByName"
        type="text"
        value={props.inputValue}
        onChange={handleChange}
        placeholder="search"
      />
    </fieldset>
  );
};

FilterByName.propTypes = {
  resultsResults: PropTypes.func,
  inputValue: PropTypes.string,
};

export default FilterByName;
