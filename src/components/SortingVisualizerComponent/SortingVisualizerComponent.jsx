import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { Link } from 'react-router-dom';
import "../SortingVisualizerComponent/SortingVisualizerComponent.css";
import SortingcodeVisualizer from "../SortingcodeVisualizer/SortingcodeVisualizer";

Modal.setAppElement('#root');

const SortingVisualizerComponent = () => {
  const [array, setArray] = useState([]);
  const [movingIndex, setMovingIndex] = useState(null);
  const [currentLine, setCurrentLine] = useState(null);
  const [barSize, setBarSize] = useState(10);
  const [no_of_arrayBars, setNo_of_arrayBars] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      setInputValue(value);
    } else {
      alert("Please enter a valid numerical input.");
    }
  };

  const handleSetArrayBars = () => {
    const bars = parseInt(inputValue);
    if (bars >= 100) {
      alert("Please give input lesser than 100 for better experience :)")
      setBarSize(2);
    }
    if (bars >= 200) {
      alert("Please give input lesser than 100 for better experience :)")
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setArrayBars();
  }, [no_of_arrayBars]);

  return (
    <div>
      <div className="array-container">
        {array.map((value, index) => (
          <div
            className={`array-bar ${index === movingIndex ? "moving" : ""}`}
            style={{ height: `${value}px`, padding: `${barSize}px` }}
            key={index}
          >
            <div className="color-black">
              <p>{value}</p>
            </div>
          </div>
          
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
        <button className="show-code-button bg-lime-600 text-white rounded-sm mt-2" onClick={openModal}>
          Show code
        </button>

      </div>
      

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Sorting Code Visualizer"
        className="custom-modal"
        overlayClassName="custom-overlay"
      >
        <button onClick={closeModal} className="close-button">Close</button>
        <SortingcodeVisualizer currentLine={currentLine} />
      </Modal>

    </div>
  );
};

export default SortingVisualizerComponent;
