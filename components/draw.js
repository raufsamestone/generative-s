import React, { useEffect, useState } from "react";
import p5 from "p5";

const Sketch = () => {
  const [canvas, setCanvas] = useState(null);
  const [canvasWidth, setCanvasWidth] = useState(400);
  const [canvasHeight, setCanvasHeight] = useState(400);
  const [displayText, setDisplayText] = useState("Hello World!");

  useEffect(() => {
    const newCanvas = new p5(sketch);
    setCanvas(newCanvas);

    return () => newCanvas.remove();
  }, []);

  const sketch = (p) => {
    const colors = ["#EF476F", "#FFD166", "#06D6A0", "#118AB2", "#073B4C"];
    const fonts = [
      "Arial",
      "Helvetica",
      "Verdana",
      "Courier",
      "Times New Roman",
    ];
    const fontSizes = [12, 16, 24, 32, 48];

    p.setup = () => {
      p.createCanvas(canvasWidth, canvasHeight);
      p.background(255);
    };

    p.draw = () => {
      const randomX = p.random(0, canvasWidth);
      const randomY = p.random(0, canvasHeight);
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
      const randomFontSize =
        fontSizes[Math.floor(Math.random() * fontSizes.length)];

      p.fill(randomColor);
      p.textFont(randomFont);
      p.textSize(randomFontSize);
      p.text(displayText, randomX, randomY);
    };
  };

  return (
    <div>
      <input
        type="range"
        min="1"
        max="100"
        id="canvasWidth"
        name="canvasWidth"
        value={canvasWidth}
        onChange={(e) => setCanvasWidth(e.target.value)}
      />

      <input
        type="range"
        min="1"
        max="100"
        id="canvasHeight"
        name="canvasHeight"
        value={canvasHeight}
        onChange={(e) => setCanvasHeight(e.target.value)}
      />
      <label htmlFor="displayText">Display Text: </label>
      <input
        type="text"
        id="displayText"
        name="displayText"
        value={displayText}
        onChange={(e) => setDisplayText(e.target.value)}
      />

      {/* <div ref={canvas} /> */}
      <canvas ref={canvas} />
    </div>
  );
};

export default Sketch;
