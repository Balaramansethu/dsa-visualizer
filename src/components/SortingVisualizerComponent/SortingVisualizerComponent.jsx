import React, { useEffect, useState } from "react";
import "../SortingVisualizerComponent/SortingVisualizerComponent.css";
import SortingcodeVisualizer from "../SortingcodeVisualizer/SortingcodeVisualizer";

const SortingVisualizerComponent = () => {
  const [array, setArray] = useState([]);
  const [movingIndex, setMovingIndex] = useState(null);
  const [currentLine, setCurrentLine] = useState(null);
  const [barSize, setBarSize] = useState(5);// setting default value as 5 for array bar size
  const [no_of_arrayBars, setNo_of_arrayBars] = useState(0); // default value
  const [inputValue, setInputValue] = useState("");
  const animationSpeed = 20;

  const random_number_generator = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const setArrayBars = () => {
    const newArray = [];
    for (let i = 0; i < no_of_arrayBars; i++) {
      newArray.push(random_number_generator(10, 100));
    }
    setArray(newArray);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      setInputValue(value); // Update the input if it's numeric
    } else {
      alert("Please enter a valid numerical input."); // Alert if non-numeric
    }
  };

  const handleSetArrayBars = () => { // if the arrays are in more number then reducing the size of array bar
    const bars = parseInt(inputValue);
    if (bars >= 120) {
      setBarSize(2);
    }
    if (bars >= 200) {
      setBarSize(1);
    }
    if (!isNaN(bars) && bars > 0) {
      setNo_of_arrayBars(bars);
    }
  };

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const updateCurrentLine = async (line) => {
    setCurrentLine(line);
    await sleep(70);
  };

  const updateMovingIndex = async (index) => {
    setMovingIndex(index);
    await sleep(70);
  };

  const bubbleSort = async () => {
    let tempArray = [...array];
    let swapped = false;

    await updateCurrentLine(0);
    for (let i = 0; i < no_of_arrayBars; i++) {
      swapped = false;
      await updateCurrentLine(3);
      for (let j = 0; j < no_of_arrayBars - i - 1; j++) {
        await updateCurrentLine(4);
        await updateMovingIndex(j);
        await updateCurrentLine(5);
        if (tempArray[j] > tempArray[j + 1]) {
          await updateCurrentLine(6);
          [tempArray[j], tempArray[j + 1]] = [tempArray[j + 1], tempArray[j]];
          swapped = true;
          await updateCurrentLine(7);
          setArray([...tempArray]);
          await updateCurrentLine(8);
          await sleep(animationSpeed);
          await updateCurrentLine(9);
        }
      }
      await updateMovingIndex(null);
      if (!swapped) break;
    }
    await updateCurrentLine(null);
  };

  useEffect(() => {
    setArrayBars();
  }, [no_of_arrayBars]);

  return (
    <div>
              {/* <SortingcodeVisualizer currentLine={currentLine} /> */} 
      <div className="array-container">
        {array.map((value, index) => (
          <div
            className={`array-bar ${index === movingIndex ? "moving" : ""}`}
            style={{ height: `${value}px`, padding: `${barSize}px` }} //applying the altered bar size as padding
            key={index}
          ></div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          className="bg-slate-600 text-white rounded-sm mt-2 pl-10 pt-2 pb-2"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter number of bars"
        />

        <button
          className="bg-slate-600 text-white rounded-sm mt-2"
          onClick={handleSetArrayBars}
        >
          Set Number of Bars
        </button>
        <button
          className="bg-slate-600 text-white rounded-sm mt-2"
          onClick={bubbleSort}
        >
          Bubble Sort
        </button>
        <button className="show-code-button">Show code</button>
      </div>
    </div>
  );
};

export default SortingVisualizerComponent;
