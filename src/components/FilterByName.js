const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.filterByName({
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

export default FilterByName;
