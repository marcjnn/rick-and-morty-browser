const FilterByCheckbox = (props) => {
  // console.log(props);
  const handleChange = (ev) => {
    props.filterResults({ key: props.filter, value: ev.target.value });
  };
  const items = props.filterby.map((item, index) => {
    return (
      <li key={index}>
        <label htmlFor={item}>
          {item}
          <input
            type="checkbox"
            name={props.filter}
            id={item}
            value={item}
            onChange={handleChange}
            checked={props.filters[props.filter].includes(item)}
          />
        </label>
      </li>
    );
  });
  return (
    <fieldset>
      <legend>filter by {props.filter}</legend>
      <ul>{items}</ul>
    </fieldset>
  );
};

export default FilterByCheckbox;
