// styles & resources
import "../style/components/Filters.scss";
import icons from "../assets/icons";

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
    <form className="filters" onSubmit={handleSubmit} action="" methog="">
      <h2 className="filters__title">
        Filter by
      </h2>
      <FilterByName
        inputValue={props.inputValue}
        filterResults={props.filterResults}
      />
      <FilterByCheckbox
        filters={props.filters}
        filter={"status"}
        filterby={props.status}
        filterResults={props.filterResults}
        icon={icons.medical}
      />
      <FilterByCheckbox
        filters={props.filters}
        filter={"species"}
        filterby={props.species}
        filterResults={props.filterResults}
        icon={icons.ghost}
      />
      <FilterByCheckbox
        filters={props.filters}
        filter={"origin"}
        filterby={props.origin}
        filterResults={props.filterResults}
        icon={icons.globe}
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
