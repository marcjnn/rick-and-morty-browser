// components
import FilterByName from "./FilterByName";
import FilterByCheckbox from "./FilterByCheckbox";

const Filters = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  console.log(props);
  console.log(props.filters);

  return (
    <form onSubmit={handleSubmit} action="" methog="">
      <FilterByName
        inputValue={props.inputValue}
        filterResults={props.filterResults}
      />
      <FilterByCheckbox
        filters={props.filters}
        filter={"status"}
        filterby={props.status}
        filterResults={props.filterResults}
      />
      <FilterByCheckbox
        filters={props.filters}
        filter={"species"}
        filterby={props.species}
        filterResults={props.filterResults}
      />
      <FilterByCheckbox
        filters={props.filters}
        filter={"origin"}
        filterby={props.origin}
        filterResults={props.filterResults}
      />
    </form>
  );
};

export default Filters;
