import { useState, useRef } from "react";
import UnitSelector from "./UnitSelector";
import ValueStepper from "./ValueStepper";
import "../styles/UnitValueStepper.css";

const UnitValueStepper = () => {
  const [unit, setUnit] = useState("%");
  const [value, setValue] = useState("1.0");
  const [previousValue, setPreviousValue] = useState(1.0);
  const inputRef = useRef(null);

  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
    if (newUnit === "%" && value > 100) {
      setValue(100);
      setPreviousValue(100);
    }
  };

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const extractFirstNumber = (input) => {
    const cleaned = input.replace(",", ".").trim();
    const match = cleaned.match(/-?\d+\.?\d*/);
    return match ? match[0] : null;
  };

  const handleBlur = () => {
    const trimmedValue = value.trim();

    // Nếu bắt đầu bằng ký tự không phải số hoặc dấu '-', giữ nguyên previousValue
    if (!/^[0-9\-]/.test(trimmedValue)) {
      setValue(previousValue.toString());
      return;
    }

    const firstNumber = extractFirstNumber(trimmedValue);

    // Nếu không tìm thấy số hợp lệ, giữ nguyên previousValue
    if (firstNumber === null) {
      setValue(previousValue.toString());
      return;
    }

    let numericValue = parseFloat(firstNumber);
    if (isNaN(numericValue) || numericValue < 0) numericValue = 0;
    if (unit === "%" && numericValue > 100) {
      numericValue = previousValue <= 100 ? previousValue : 100;
    }
    console.log("numericValue", numericValue);
    setValue(numericValue.toString());
    setPreviousValue(numericValue);
  };

  const handleIncrement = () => {
    let newValue = parseFloat(value) + 1;
    if (unit === "%" && newValue > 100) {
      newValue = 100;
    }
    setValue(newValue);
    setPreviousValue(newValue);
  };

  const handleDecrement = () => {
    let newValue = parseFloat(value) - 1;
    if (newValue < 0) {
      newValue = 0;
    }
    setValue(newValue);
    setPreviousValue(newValue);
  };

  return (
    <div className="app-container">
      <div className="unit-value-container">
        <div className="section-title">Unit value</div>
        <div className="unit-value-stepper">
          <UnitSelector unit={unit} onUnitChange={handleUnitChange} />
          <ValueStepper
            value={value}
            unit={unit}
            onChange={handleValueChange}
            onBlur={handleBlur}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            inputRef={inputRef}
          />
        </div>
      </div>
    </div>
  );
};

export default UnitValueStepper;
