// styles & resources
import "../style/components/FilterByCheckbox.scss";

// React
import React, { useState } from "react";
import PropTypes from "prop-types";

const FilterByCheckbox = (props) => {
  const [hidden, setHidden] = useState(window.innerWidth < 768 ? "hidden" : "");
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

  const handleClick = () => {
    if (window.innerWidth < 768) {
      setHidden(hidden === "hidden" ? "" : "hidden");
    }
  };
  return (
    <fieldset className="filter__section">
      <legend className="filter__title" onClick={handleClick}>
        {props.icon} filter by {props.filter}
      </legend>
      <ul className={hidden}>{items}</ul>
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
