// styles & resources
import "../style/components/FilterByCheckbox.scss";

// React
import PropTypes from "prop-types";

const FilterByCheckbox = (props) => {
  // console.log(props);
  const handleChange = (ev) => {
    props.filterResults({ key: props.filter, value: ev.target.value });
  };
  const items = props.filterby.map((item, index) => {
    return (
      <li key={index}>
        <label className="filter__label" htmlFor={item}>
          <input
            type="checkbox"
            name={props.filter}
            id={item}
            value={item}
            onChange={handleChange}
            checked={props.filters[props.filter].includes(item)}
          />{" "}
          {item}
        </label>
      </li>
    );
  });
  return (
    <fieldset className="filter__section">
      <legend className="filter__title">
        {props.icon} filter by {props.filter}
      </legend>
      <ul>{items}</ul>
    </fieldset>
  );
};

FilterByCheckbox.propTypes = {
  resultsResults: PropTypes.func,
  filterby: PropTypes.array,
  filter: PropTypes.string,
  filters: PropTypes.object,
};

export default FilterByCheckbox;
