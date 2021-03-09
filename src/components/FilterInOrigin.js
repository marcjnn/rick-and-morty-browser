const FilterInOrigin = (props) => {
  console.log(props.filters.inorigin);
  const handleChange = () => {
    props.isInOrigin(!props.filters.inorigin);
  };
  return (
    <label className="filter__label">
      <input
        type="checkbox"
        // name={}
        // id={}
        // value={}
        onChange={handleChange}
        checked={props.filters.inorigin === true}
      />{" "}
      in origin
    </label>
  );
};

export default FilterInOrigin;

// checked if character.origin = character.location
