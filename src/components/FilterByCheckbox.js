const FilterByCheckbox = (props) => {
  // console.log(props);
  const handleChange = (ev) => {
    // props.filterByName({
    //   key: "name",
    //   value: ev.target.value,
    // });
    // console.log(ev.target.value);
    props.filterToApply({ key: props.filter, value: ev.target.value });
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
