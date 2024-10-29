import React, { useState } from "react";

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const LinkedList = () => {
  const [head, setHead] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [indexToRemove, setIndexToRemove] = useState("");
  const [listSize, setListSize] = useState(0);

  const addNode = () => {
    if (!inputValue) return;
    const newNode = new ListNode(parseInt(inputValue));
    if (!head) {
      setHead(newNode);
    } else {
      let current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    setInputValue("");
    setListSize(listSize + 1);
  };

  const removeNodeByIndex = () => {
    const index = parseInt(indexToRemove);
    if (index < 0 || index >= listSize) {
      alert("Invalid index");
      return;
    }
    let current = head;
    let prev = null;
    if (index === 0) {
      setHead(current.next);
    } else {
      for (let i = 0; i < index; i++) {
        prev = current;
        current = current.next;
      }
      prev.next = current.next;
    }
    setListSize(listSize - 1);
    setIndexToRemove(""); // Clear input after removing
  };

  const sortList = () => {
    if (!head || !head.next) return; // If the list is empty or has one node, no need to sort.

    // Convert the linked list to an array for sorting.
    const nodesArray = [];
    let current = head;
    while (current) {
      nodesArray.push(current.value);
      current = current.next;
    }

    // Sort the array.
    nodesArray.sort((a, b) => a - b); // Sort in ascending order.

    // Rebuild the linked list from the sorted array.
    let sortedHead = new ListNode(nodesArray[0]);
    let sortedCurrent = sortedHead;
    for (let i = 1; i < nodesArray.length; i++) {
      sortedCurrent.next = new ListNode(nodesArray[i]);
      sortedCurrent = sortedCurrent.next;
    }

    // Update the head with the sorted list.
    setHead(sortedHead);
  };

  const clearAllNodes = () => {
    setHead(null);
    setListSize(0);
    setInputValue("");
    setIndexToRemove("");
  };

  const renderList = () => {
    const nodes = [];
    let current = head;
    let index = 0;

    while (current) {
      nodes.push(
        <div
          key={index}
          className="bg-blue-400 text-white p-2 m-1 rounded-lg shadow-md"
        >
          {current.value}
        </div>
      );
      if (current.next) {
        nodes.push(
          <div key={`arrow-${index}`} className="arrow">
            &rarr; {/* Arrow symbol */}
          </div>
        );
      }
      current = current.next;
      index++;
    }
    return nodes;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <div className="flex flex-wrap justify-center mb-8">{renderList()}</div>
      <div className="flex gap-2 mb-4">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="p-2 border rounded-md"
          placeholder="Enter value"
        />
        <button
          onClick={addNode}
          className="bg-green-500 text-white px-4 py-2 rounded-md"
        >
          Add Node
        </button>
        <button
          onClick={sortList}
          className="bg-yellow-500 text-white px-4 py-2 rounded-md"
        >
          Sort Nodes
        </button>
      </div>
      <div className="flex gap-2 mb-4">
        <input
          type="number"
          value={indexToRemove}
          onChange={(e) => setIndexToRemove(e.target.value)}
          className="p-2 border rounded-md"
          placeholder="Index to Remove"
        />
        <button
          onClick={removeNodeByIndex}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Remove Node
        </button>
      </div>
      <style jsx>{`
        .arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px; /* Adjust size as needed */
          color: #ffffff; /* Arrow color */
        }
      `}</style>
      <button
          onClick={clearAllNodes}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Clear All
        </button>
    </div>
  );
};

export default LinkedList;
