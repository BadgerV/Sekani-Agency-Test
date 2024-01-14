import "./LoadingComponent.css";
import rightCircuit from "../../assets/right-circuit-fill.svg";
import leftCircuit from "../../assets/left-circuit-fill.svg";
import logo from "../../assets/logo-transparent.png";

const LoadingComponent = () => {
  return (
    <div className="loading__component">
      <img
        src={leftCircuit}
        alt="circuit-left"
        className="loading__component--first"
      />
      <img src={logo} alt="logo" className="loading__component--second" />
      <img
        src={rightCircuit}
        alt="circuit-right"
        className="loading__component--third"
      />
    </div>
  );
};

export default LoadingComponent;
