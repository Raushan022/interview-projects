import React, { useEffect, useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    if (typeOfColor === "rgb") handleGenerateRandonRGBColor();
    else handleGenerateRandonHEXColor();
  }, [typeOfColor]);

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  const handleGenerateRandonHEXColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, "A", "B", "C", "D", "E", "F"];

    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor = hexColor + hex[randomColorUtility(hex.length)];
    }
    //  console.log(hexColor);
    setColor(hexColor);
  };

  const handleGenerateRandonRGBColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleGenerateRandonHEXColor
            : handleGenerateRandonRGBColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color " : "HEX Color "}</h3>
        <h2>{color}</h2>
      </div>
    </div>
  );
};

export default RandomColor;
