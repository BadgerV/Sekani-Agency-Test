import logo from "../../assets/cs-logo.png";
import "./Navbar.css";
import { useState } from "react";

import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import StoreIcon from "@mui/icons-material/Store";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import Dropdown from "../Dropdown/Dropdown";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="navbar">
      <div className="navbar__top">
        <div className="navbar__top--left">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navbar__top--middle">
          <button type="button" className="navbar__top--middle--button">
            Dashboard
          </button>
          <button type="button" className="navbar__top--middle--button">
            <StoreIcon />
            Marketplace
          </button>
        </div>
        <div className="navbar__top--right">
          <button className="navbar__top--right--cont">
            <HeadsetMicIcon className="headmic-svg" />
          </button>
          <button className="navbar__top--right--cont">
            <PowerSettingsNewIcon />
            <span>Login</span>
          </button>
        </div>
      </div>
      <div className="navbar__middle">
        <nav className="navbar__middle--links">
          <ul className="navbar__middle--links--list">
            <li className="navbar__middle--links--item">
              <button type="button " className="selected-link">
                Cyberspawns
              </button>
            </li>
            <li className="navbar__middle--links--item">
              <button type="button">Cyber skins</button>
            </li>
            <li className="navbar__middle--links--item">
              <button type="button">Avatar Wears</button>
            </li>
            <li className="navbar__middle--links--item">
              <button type="button">Avatar Skins</button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="navbar__bottom">
        <div className="navbar__bottom--left">
          <button className="navbar__bottom--left--button">Aves</button>
          <button className="navbar__bottom--left--button">Reptiles</button>
          <button className="navbar__bottom--left--button">Mammals</button>
          <button className="navbar__bottom--left--button">Amphibs</button>
          <button className="navbar__bottom--left--button">Authropods</button>
          <button className="navbar__bottom--left--button">Aqua</button>
        </div>
        <div className="navbar__bottom--middle">
          <Dropdown title={"Crown"} />
          <Dropdown title={"Eyes"} />
          <Dropdown title={"Mouth"} />
          <Dropdown title={"Arms"} />
          <Dropdown title={"Tail"} />
          <Dropdown title={"Feet"} />
        </div>
        <div className="navbar__bottom--right">
          <div className="navbar__bottom--right--item">
            <div
              className={`${isChecked ? "checked" : ""}`}
              onClick={handleClick}
            ></div>
            <span>Egg</span>
          </div>

          <div className="navbar__bottom--right--item">
            <div
              className={`${isChecked ? "checked" : ""}`}
              onClick={handleClick}
            ></div>
            <span>Adult</span>
          </div>

          <div className="navbar__bottom--right--special--item ">
            <span>Clear</span>
            <div className="svg__container">
              <CleaningServicesIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;