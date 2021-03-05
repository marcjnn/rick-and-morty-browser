// styles & resources
import "../style/components/FilterByName.scss";

// React
import PropTypes from "prop-types";

// components
import FilterByName from "./FilterByName";
import FilterByCheckbox from "./FilterByCheckbox";

const Filters = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  // console.log(props);
  // console.log(props.filters);

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

Filters.propTypes = {
  resultsResults: PropTypes.func,
  inputValue: PropTypes.string,
  filterby: PropTypes.array,
  filters: PropTypes.object,
  status: PropTypes.array,
  species: PropTypes.array,
  origin: PropTypes.array,
};

export default Filters;
