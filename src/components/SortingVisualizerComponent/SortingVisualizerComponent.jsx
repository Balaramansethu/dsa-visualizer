import React, { useEffect, useState } from "react";
import "../SortingVisualizerComponent/SortingVisualizerComponent.css";

const SortingVisualizerComponent = () => {
  const [array, setArray] = useState([]);
  const [movingIndex, setMovingIndex] = useState(null);
  const no_of_arrayBars = 100; // Defining the number of bars to be shown
  const animationSpeed = 10; // Adjust animation speed as needed

  const random_number_generator = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const bubbleSort = async () => {
    let tempArray = [...array];
    let swapped = false;

    for (let i = 0; i < no_of_arrayBars; i++) {
      swapped = false;
      for (let j = 0; j < no_of_arrayBars - i - 1; j++) {
        setMovingIndex(j);
        if (tempArray[j] > tempArray[j + 1]) {
          [tempArray[j], tempArray[j + 1]] = [tempArray[j + 1], tempArray[j]];
          swapped = true;
          setArray([...tempArray]);
          await sleep(animationSpeed);
        }
      }
      setMovingIndex(null); // Reset moving index after sorting
      if (!swapped) break;
    }
  };

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  useEffect(() => {
    const newArray = [];
    for (let i = 0; i < no_of_arrayBars; i++) {
      newArray.push(random_number_generator(10, 100));
    }
    setArray(newArray);
  }, []);

  return (
    <div className="array-container">
      {array.map((value, index) => (
        <div
          className={`array-bar ${index === movingIndex ? "moving" : ""}`}
          style={{ height: `${value}px` }}
          key={index}
        ></div>
      ))}
      <button onClick={bubbleSort}>Bubble Sort</button>
    </div>
  );
};

export default SortingVisualizerComponent;
