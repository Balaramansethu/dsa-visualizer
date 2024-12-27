import React from "react";
import "./SortingcodeVisualizer.css";
const SortingcodeVisualizer = ({ currentLine }) => {
  const codeLines = [

    "for (let i = 0; i < no_of_arrayBars; i++) {",  //dummy code for sorting array
    "  swapped = false;",
    "  for (let j = 0; j < no_of_arrayBars - i - 1; j++) {",
    "    setMovingIndex(j);",
    "    if (tempArray[j] > tempArray[j + 1]) {",
    "      [tempArray[j], tempArray[j + 1]] = [tempArray[j + 1], tempArray[j]];",
    "      swapped = true;",
    "      setArray([...tempArray]);",
    "      await sleep(animationSpeed);",
    "    }",
    "  }",
    "  setMovingIndex(null);",
    "  if (!swapped) break;",
    "}",
  ];

  return (
    <div className="code-display">
      {codeLines.map((line, index) => (
        <h5 key={index} className={index === currentLine ? "highlight" : ""}>
          {line}
        </h5>
      ))}
    </div>
  );
};

export default SortingcodeVisualizer;
