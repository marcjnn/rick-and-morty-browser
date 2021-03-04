import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { faSkullCrossbones } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

const icons = {
  heartbeat: <FontAwesomeIcon icon={faHeartbeat} className="reactIcon" />,
  skull: <FontAwesomeIcon icon={faSkullCrossbones} className="reactIcon" />,
  user: <FontAwesomeIcon icon={faUser} className="reactIcon" />,
  questionmark: (
    <FontAwesomeIcon icon={faQuestionCircle} className="reactIcon" />
  ),
};

export default icons;
