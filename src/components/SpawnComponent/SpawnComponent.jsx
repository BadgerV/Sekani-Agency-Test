import "./SpawnComponent.css";
import birdImage from "../../assets/bird-image.png";
import spawn1 from "../../assets/spawn-1.png";
import spawn2 from "../../assets/spawn-2.png";
import spawn3 from "../../assets/spawn-3.png";
import spawn4 from "../../assets/spawn-4.png";
import spawn5 from "../../assets/spawn-5.png";
import spawn6 from "../../assets/spawn-6.png";

const SpawnComponent = ({ img, name, price, color }) => {
  const spawnImages = [spawn1, spawn2, spawn3, spawn4, spawn5, spawn6];
  const selectedImage = spawnImages[+img - 1];
  return (
    <div className="spawn__component">
      <div className="spawn__component--left">
        <img src={selectedImage} alt="" />
      </div>
      <div className="spawn__component--middle">
        <span>{name}</span>
        <div
          className="spawn__component--middle--color__part"
          style={
            color == "primary"
              ? { backgroundColor: "#29B3FF" }
              : { backgroundColor: "#FFD527" }
          }
        ></div>
        <div className="spawn__component--middle--div">
          <div>
            <img src={birdImage} alt="" />
            <span>Wings</span>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="spawn__component--right">
        <span>= 0.512</span>
        <span>${price}</span>
      </div>
    </div>
  );
};

export default SpawnComponent;
