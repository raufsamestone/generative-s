import React, { useState, useEffect } from "react";
import * as Tone from "tone";

function MousePrediction() {
  const [synth, setSynth] = useState(null);
  const [prediction, setPrediction] = useState("");

  useEffect(() => {
    // Set up the Tone.js synth
    const polySynth = new Tone.PolySynth().toDestination();
    setSynth(polySynth);
  }, []);

  function handleMouseMove(event) {
    // Get the x-coordinate of the mouse position
    const mouseX = event.clientX;

    // Map the x-coordinate to a MIDI note number
    // const note = Math.floor((Tone.Frequency("440hz").ftomidi(40)) + mouseX);
    const note = Math.floor(Math.random() + mouseX);

    // Play the note on the synth
    synth.triggerAttackRelease(note, "8n");

    // Calculate the distance from the center of the screen
    const distance = Math.abs(window.innerWidth / 2 - mouseX);

    // Update the UI with a prediction based on the distance
    if (distance < 100) {
      console.log(distance);
      setPrediction("You're getting warmer!");
    } else if (distance < 200) {
      setPrediction("You're getting closer!");
    } else {
      setPrediction("You're far away...");
    }
  }

  return (
    <div onMouseMove={handleMouseMove}>
      <h1>Move your mouse! 🖱️</h1>
      <h2>{prediction}</h2>
    </div>
  );
}

export default MousePrediction;
