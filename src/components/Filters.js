import FilterByName from "./FilterByName";

const Filters = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} action="" methog="">
      <FilterByName filterByName={props.filterByName} />
    </form>
  );
};

export default Filters;
