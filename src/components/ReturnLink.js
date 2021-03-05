// styles & resources
import "../style/components/ReturnLink.scss";
import icons from "../assets/icons";

// React
import { Link } from "react-router-dom";

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

export default ReturnLink;
