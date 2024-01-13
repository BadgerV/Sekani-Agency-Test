import "./Dropdown.css";

const Dropdown = ({ title, different = false }) => {
  //   const handleSelectChange = (event) => {
  //     onSelect(event.target.value);
  //   };

  return (
    <div className="dropdown">
      <div className="dropdown__container">
        <select
          id="options"
          //   value={selected}
          //   onChange={handleSelectChange}
          //   className={`dropdown__select ${
          //     selected ? "dropdown__select--selected" : ""
          //   }`}
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
          {/* {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="dropdown__option"
            >
              {option.label}
            </option>
          ))} */}
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
      {/* {selected && <div className="dropdown__selected-option">{selected}</div>} */}
    </div>
  );
};

export default Dropdown;
