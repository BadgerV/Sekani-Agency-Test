import "./SpawnComponent.css";
import birdImage from "../../assets/bird-image.png";

const SpawnComponent = ({ img, name, price, color }) => {
  return (
    <div className="spawn__component">
      <div className="spawn__component--left">
        <img src="../../assets/spawn-1.png" alt="" />
      </div>
      <div className="spawn__component--middle">
        <span>{name}</span>
        <div className="spawn__component--middle--color__part"></div>
        <div className="spawn__component--middle--div">
          <div>
            <img src={birdImage} alt="" />
            
          </div>
        </div>
      </div>
      <div className="spawn__component--right"></div>
    </div>
  );
};

export default SpawnComponent;
