// components
import FilterByName from "./FilterByName";
import FilterByCheckbox from "./FilterByCheckbox";

const Filters = (props) => {
  // console.log(props);
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} action="" methog="">
      <FilterByName
        filterByName={props.filterByName}
        inputValue={props.inputValue}
      />
      <FilterByCheckbox
        filter={"status"}
        filterby={props.status}
        filterToApply={props.filterBy}
      />
      <FilterByCheckbox
        filter={"species"}
        filterby={props.species}
        filterToApply={props.filterBy}
      />
      <FilterByCheckbox
        filter={"origin"}
        filterby={props.origin}
        filterToApply={props.filterBy}
      />
    </form>
  );
};

export default Filters;
