const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.filterByName({
      key: "name",
      value: ev.target.value,
    });
  };
  return <input type="text" value={props.inputValue} onChange={handleChange} />;
};

export default FilterByName;
