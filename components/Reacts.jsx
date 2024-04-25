import { useState } from "react";

const ParentComponent = () => {
  const [color, setColor] = useState();

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <div style={{ width: "200px", height: "200px", backgroundColor: color }}>
        This box changes color!
      </div>
      <ChildComponent onColorChange={handleColorChange} />
    </div>
  );
};

const ChildComponent = ({ onColorChange }) => {
  const handleInputChange = (event) => {
    onColorChange(event.target.value);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <input type="color" onChange={handleInputChange} />
    </div>
  );
};

export default ParentComponent;
