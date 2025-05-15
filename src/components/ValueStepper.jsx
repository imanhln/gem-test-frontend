const ValueStepper = ({
  value,
  unit,
  onChange,
  onBlur,
  onIncrement,
  onDecrement,
  inputRef,
}) => {
  const isDecrementDisabled = parseFloat(value) <= 0;
  const isIncrementDisabled = unit === "%" && parseFloat(value) >= 100;

  return (
    <div className="value-stepper">
      <div className="label">Value</div>
      <div className="stepper-container">
        <button
          className="stepper-button"
          onClick={onDecrement}
          disabled={isDecrementDisabled}
        >
          −
        </button>
        <input
          ref={inputRef}
          type="text"
          className="stepper-input"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        <button
          className="stepper-button"
          onClick={onIncrement}
          disabled={isIncrementDisabled}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ValueStepper;
