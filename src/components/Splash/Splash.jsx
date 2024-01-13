import "./Splash.css";
import { BackgroundSVG } from "../common/SimpleSVGs";
import { CrawlingSVG } from "../common/SimpleSVGs";

import leftCircuit from "../../assets/left-circuit-fill.svg";
import rightCircuit from "../../assets/right-circuit-fill.svg";
import Dropdown from "../Dropdown/Dropdown";

const Splash = () => {
  return (
    <div className="splash">
      <div className="splash__top">
        <BackgroundSVG />
        <CrawlingSVG />
      </div>
      <div className="splash__middle">
        <div className="splash__middle--left">
          <img src={leftCircuit} alt="" />
          <span>72400 spawns</span>
          <img src={rightCircuit} alt="" />
        </div>
        <div className="splash__middle--right">
          <Dropdown title="Latest" different="true" />
        </div>
      </div>
      <div className="splash__bottom"></div>
    </div>
  );
};

export default Splash;
