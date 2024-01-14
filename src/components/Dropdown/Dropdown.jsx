import "./Dropdown.css";

const Dropdown = ({ title, different = false }) => {
  return (
    <div className="dropdown">
      <div className="dropdown__container">
        <select
          id="options"
          className="dropdown__select"
          style={
            different
              ? {
                  backgroundColor: "#0C1C3A",
                  border: "1px solid #74e9fc",
                  color: "white",
                  width: "9rem",
                }
              : {}
          }
        >
          <option className="dropdown__option">{title}</option>
        </select>
        <div
          className="dropdown__custom-arrow"
          style={
            different
              ? {
                  color: "white",
                }
              : {}
          }
        >
          &#9660;
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
