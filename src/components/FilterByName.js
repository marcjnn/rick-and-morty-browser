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
    <>
      <label htmlFor="searchByName">search by name</label>
      <input
        id="searchByName"
        type="text"
        value={props.inputValue}
        onChange={handleChange}
      />
    </>
  );
};

FilterByName.propTypes = {
  resultsResults: PropTypes.func,
  inputValue: PropTypes.string,
};

export default FilterByName;
