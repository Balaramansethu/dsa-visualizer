import React from 'react'
import './SortingcodeVisualizer.css'
  const SortingcodeVisualizer = ({ currentLine }) => {
    const codeLines = [
      "let tempArray = [...array];",
      "let swapped = false;",
      "for (let i = 0; i < no_of_arrayBars; i++) {",
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
      <pre key={index} className={index === currentLine ? 'highlight' : ''}>
        {line}
      </pre>
    ))}
  </div>
  )
}

export default SortingcodeVisualizer