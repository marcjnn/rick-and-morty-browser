// styles & resources
import "../style/components/ReturnLink.scss";

// React
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ReturnLink = (props) => {
  return (
    <Link className="return__link" to={props.route}>
      <p className="return__button">
        {props.icon}
        <span className="return__button--text">{props.text}</span>
      </p>
    </Link>
  );
};

ReturnLink.defaultProps = {
  route: "/",
  text: "return",
};

ReturnLink.propTypes = {
  route: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.object,
};

export default ReturnLink;
