const UnitSelector = ({ unit, onUnitChange }) => {
  return (
    <div className="unit-selector">
      <div className="label">Unit</div>
      <div className="unit-buttons">
        <button
          className={`unit-button ${unit === "%" ? "active" : ""}`}
          onClick={() => onUnitChange("%")}
        >
          %
        </button>
        <button
          className={`unit-button ${unit === "px" ? "active" : ""}`}
          onClick={() => onUnitChange("px")}
        >
          px
        </button>
      </div>
    </div>
  );
};

export default UnitSelector;
