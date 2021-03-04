const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.filterResults({
      key: "name",
      value: ev.target.value,
    });
    // props.filterByName({
    //   key: "name",
    //   value: ev.target.value,
    // });
  };
  // console.log(props);
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
