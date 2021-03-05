import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartbeat,
  faSkullCrossbones,
  faQuestionCircle,
  faAngleDoubleLeft,
  faHome,
  faSignature,
  faGlobeAmericas,
  faGhost,
  faStarOfLife,
  faCopyright,
  faAt,
} from "@fortawesome/free-solid-svg-icons";

const icons = {
  heartbeat: <FontAwesomeIcon icon={faHeartbeat} className="reactIcon" />,
  skull: <FontAwesomeIcon icon={faSkullCrossbones} className="reactIcon" />,
  questionmark: (
    <FontAwesomeIcon icon={faQuestionCircle} className="reactIcon" />
  ),
  doublearrow: (
    <FontAwesomeIcon icon={faAngleDoubleLeft} className="reactIcon" />
  ),
  homepage: <FontAwesomeIcon icon={faHome} className="reactIcon" />,
  signature: <FontAwesomeIcon icon={faSignature} className="reactIcon" />,
  globe: <FontAwesomeIcon icon={faGlobeAmericas} className="reactIcon" />,
  ghost: <FontAwesomeIcon icon={faGhost} className="reactIcon" />,
  medical: <FontAwesomeIcon icon={faStarOfLife} className="reactIcon" />,
  copyright: <FontAwesomeIcon icon={faCopyright} className="reactIcon" />,
  at: <FontAwesomeIcon icon={faAt} className="reactIcon" />,
};

export default icons;
