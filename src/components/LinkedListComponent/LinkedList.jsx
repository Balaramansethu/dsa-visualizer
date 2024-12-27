import React, { useState } from "react";
import "../LinkedListComponent/DummyComponent.css";

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.id = crypto.randomUUID(); // Use a unique ID
  }
}



const LinkedList = () => {
  const [head, setHead] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [indexValue, setIndexValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Insert");
  const [selectedAction, setSelectedAction] = useState("");
  const [selectedActionInfo, setSelectedActionInfo] = useState("");

  const actionsByCategory = {
    Insert: ["Add Node at Back", "Add Node at Front", "Add Node at Index"],
    Delete: [
      "Remove First Node",
      "Remove Last Node",
      "Remove Node by Index",
      "Remove Node by Data",
    ],
    Utilities: [
      "Reverse List",
      "Replace Node Value",
      "Clear List",
      "Update Node Data",
    ],
  };

  const getActionInfo = (action) => {
    switch (action) {
      case "Add Node at Back":
        return "Also referred to as push(), this operation inserts a new node at the end of the Linked List. Usually takes O(n) time, but since we have a separate pointer for the tail, it executes in just O(1) time.";
      case "Add Node at Front":
        return "Also referred to as unshift(), this operation has an O(1) time complexity, and it inserts the node at the very beginning of the Linked List. The Head pointer points to this newly inserted node.";
      case "Add Node at Index":
        return "This method inserts a new node at a specific index. It takes O(n) time to complete the operation.0 ≤ index ≤ n-1 (where n is the size of the list)"
      case "Remove First Node":
        return "Also referred to as unshift(), this operation removes the first node from the linked list within O(1) time."
      case "Remove Last Node":
        return "Also referred to as pop(), this operation removes the last node from the linked list and has a time complexity of O(n)."
      case "Remove Node by Index":
        return "This method removes the node at a specific index and takes O(n) time to complete the operation.0≤ index ≤ n-1 (where n is the size of the list)" 
      case "Remove Node by Data":
        return "Removes the first node, which contains data equal to input data passed to the method. It takes O(n) time to complete the operation."
      case "Reverse List":
        return "This method reverses the Linked list by interchanging the reference to each node and adjusting the head pointer."
      case "Update Node Data":
        return "Also referred to as set(), this operation edits the data of the node at a specific index and has a time complexity of O(n).0 ≤ index ≤ n-1 (where n is the size of the list)"  
      case "Clear List":
        return "This operation removes all nodes by setting the linked list as undefined. It takes O(1) time to complete execution."
      case "Replace Node Value":
        return "It is similar to the updateData() operation, but instead of replacing the data at the specified index, it deletes the old node and creates a new node with input data at the specified index. It also takes O(n) time to complete the operation.0 ≤ index ≤ n-1 (where n is the size of the list)"
      default:
        return "Please select a valid action to see the details.";
    }
  };

  const handleActionChange = (action) => {
    setSelectedAction(action);
    setSelectedActionInfo(getActionInfo(action));
  };

  const handleAction = (event) => {
    event.preventDefault(); // Add this line to prevent default behavior
    switch (selectedAction) {
      case "Add Node at Back":
        addNode();
        break;
      case "Add Node at Front":
        addNodeAtFront();
        break;
      case "Add Node at Index":
        addNodeByIndex();
        break;
      case "Remove First Node":
        removeFirstNode();
        break;
      case "Remove Last Node":
        removeLastNode();
        break;
      case "Remove Node by Index":
        removeNodeByIndex();
        break;
      case "Remove Node by Data":
        removeNodeByData();
        break;
      case "Reverse List":
        reverseList();
        break;
      case "Replace Node Value":
        replaceNodeValue();
        break;
      case "Clear List":
        clearList();
        break;
      case "Update Node Data":
        updateNodeData();
        break;
      default:
        alert("Please select a valid action.");
    }
  };

  const getListSize = () => {
    let size = 0;
    let current = head;
    while (current) {
      size++;
      current = current.next;
    }
    return size;
  };

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
  };

  const addNodeAtFront = () => {
    if (!inputValue) {
      console.error("Input value is empty");
      return;
    }
  
    const parsedValue = parseInt(inputValue);
    if (isNaN(parsedValue)) {
      console.error("Invalid input: not a number");
      return;
    }
  
    const newNode = new ListNode(parsedValue);
  
    console.log("Creating new node with value:", parsedValue);
    newNode.next = head;
  
    console.log("Setting new head. Previous head:", head);
    setHead(newNode);
  
    console.log("New head set:", newNode);
    setInputValue("");
  };
  

  const addNodeByIndex = () => {
    const index = parseInt(indexValue);
    const value = parseInt(inputValue);
    if (index < 0 || isNaN(value)) {
      alert("Invalid input or index");
      return;
    }
    const newNode = new ListNode(value);
    if (index === 0) {
      newNode.next = head;
      setHead(newNode);
    } else {
      let current = head;
      let prev = null;
      for (let i = 0; i < index; i++) {
        prev = current;
        current = current ? current.next : null;
        if (!current && i < index - 1) {
          alert("Index out of bounds");
          return;
        }
      }
      if (prev) {
        prev.next = newNode;
        newNode.next = current;
      }
    }
    setInputValue("");
    setIndexValue("");
  };

  const removeFirstNode = () => {
    if (!head) return alert("List is empty");
    setHead(head.next);
  };

  const removeLastNode = () => {
    if (!head) return alert("List is empty");

    if (!head.next) {
      // If there's only one node, set head to null
      setHead(null);
    } else {
      let current = head;
      let prev = null;

      // Traverse to the last node
      while (current.next) {
        prev = current;
        current = current.next;
      }

      // Remove the last node by setting the second last node's next to null
      if (prev) {
        prev.next = null;
      }

      // Update the state to reflect the change
      setHead({ ...head });
    }
  };

  const removeNodeByIndex = () => {
    const index = parseInt(indexValue);
    if (index < 0 || !head) return alert("Invalid index or empty list");
    if (index === 0) {
      setHead(head.next);
    } else {
      let current = head;
      let prev = null;
      for (let i = 0; i < index; i++) {
        prev = current;
        current = current ? current.next : null;
        if (!current) {
          alert("Index out of bounds");
          return;
        }
      }
      if (prev && current) prev.next = current.next;
    }
    setIndexValue("");
  };

  const removeNodeByData = () => {
    const value = parseInt(inputValue);
    if (isNaN(value) || !head) return alert("Invalid data or empty list");
    let current = head;
    let prev = null;
    while (current) {
      if (current.value === value) {
        if (prev) {
          prev.next = current.next;
        } else {
          setHead(current.next);
        }
        setInputValue("");
        return;
      }
      prev = current;
      current = current.next;
    }
    alert("Value not found in the list");
  };

  const reverseList = () => {
    let prev = null;
    let current = head;
    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    setHead(prev);
  };

  const replaceNodeValue = () => {
    const index = parseInt(indexValue);
    const value = parseInt(inputValue);
    if (index < 0 || isNaN(value)) return alert("Invalid index or value");
    let current = head;
    for (let i = 0; i < index; i++) {
      if (!current) return alert("Index out of bounds");
      current = current.next;
    }
    if (current) current.value = value;
    setInputValue("");
    setIndexValue("");
  };

  const clearList = () => {
    setHead(null);
  };

  const updateNodeData = () => {
    const index = parseInt(indexValue);
    const value = parseInt(inputValue);
    if (index < 0 || isNaN(value)) return alert("Invalid index or value");
    let current = head;
    for (let i = 0; i < index; i++) {
      if (!current) return alert("Index out of bounds");
      current = current.next;
    }
    if (current) current.value = value;
    setInputValue("");
    setIndexValue("");
  };

  const renderList = () => {
    const nodes = [];
    let current = head;
    while (current) {
      nodes.push(
        <div
          key={current.id}
          className="p-2 m-1 bg-blue-400 text-white rounded-lg"
        >
          {current.value}
        </div>
      );
      if (current.next) {
        nodes.push(
          <div key={`${current.id}-arrow`} className="p-2">
            →
          </div>
        );
      }
      current = current.next;
    }
    return nodes;
  };
  

  const displayList = () => {
    const nodes = [];
    let current = head;
    while (current) {
      nodes.push(
        <div key={current.value}>
          {" "}
          {`"`}
          {current.value}
          {`", `}
        </div>
      );

      current = current.next;
    }
    return nodes;
  };

  return (
    <div className="bg-primary-900/10 dark:bg-neutral-900 min-h-screen justify-between">
      <div className="flex flex-col items-start py-10 gap-4 mx-6 md:mx-20 lg:mx-40">
        <div className="flex flex-col items-center justify-center gap-3 w-full">
          <div className="flex relative items-center justify-center w-full ">
            <h1
              className="font-bold text-lg md:text-2xl lg:text-4xl dark:text-neutral-100 normal-case text-center"
              text="Linked List Visualizer"
            >
              Linked List Visualizer
            </h1>
          </div>

          <p
            className="text-sm normal-case max-w-2xl dark:text-neutral-400 text-left lg:text-center rounded-full"
            text="Visualize different Singly Linked List operations in action."
          >
            Visualize different Singly Linked List operations in action.
          </p>
        </div>
        <br />
        <div className="w-full">
          <div className=" full-content-container relative w-full min-h-80 rounded-lg flex items-center justify-center  rounded-b-none mb-0 shadow-none ">
            <div className="realtive h-full overflow-hidden z-20 flex items-center justify-center">
              <div className="flex flex-wrap w-full items-center justify-center h-full ">
                <div className=" visualization flex flex-wrap items-center justify-center h-80 w-full ">
                  {/* add list visualization here */} {renderList()}
                  <div
                    display-card
                    className="absolute bottom-12 bg-black/70 rounded-full pt-2 pb-2 pl-4 pr-4 flex "
                  >
                    <div className="text-xs text-white flex items-center justify-between w-full gap-4">
                      <p>Your Linked-List will be created here</p>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overview-image absolute inset-0"></div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-between w-full">
          <div className="p-4 rounded-lg bg-white shadow-sm border-neutral-300 dark:bg-neutral-800 border dark:border-neutral-700 w-full lg:w-1/5 flex flex-col gap-4 order-1 md:-order-2">
            <div className="flex flex-col w-full">
              <p
                text="Operation"
                class="dark:text-neutral-300 text-sm normal-case font-medium peer-focus:text-primary-800 dark:peer-focus:text-primary-300"
              >
                Operation
              </p>
              <span>
                {/*here goes the dropdown for categories*/}
                <select
                  className="drop-down-categories w-auto inline-flex items-center justify-between pt-2 pb-2 pl-2  gap-2 outline outline-1 bg-white dark:outline-0 outline-neutral-300 dark:text-primary-50 dark:hover:bg-neutral-700 dark:bg-neutral-600 rounded-md hover:bg-neutral-50 max-h-10 text-left text-sm text-white mt-1"
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    setSelectedAction("");
                  }}
                >
                  {Object.keys(actionsByCategory).map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </span>
            </div>
            <div role="radiogroup" aria-required="false" dir="ltr" tabindex="0">
              <label class="text-sm dark:text-neutral-300 font-medium ">
                Actions
              </label>
              <div class="flex flex-col gap-2 mt-1">
                {/* here goes the appropriate categories action */}
               <div className="flex flex-col items-start gap-2">
  {actionsByCategory[selectedCategory].map((action) => (
    <label
      key={action}
      className="flex items-center gap-2 cursor-pointer"
      onClick={() => handleActionChange(action)} // This line ensures clicking on the label also triggers the handler
    >
      <input
        type="radio"
        value={action}
        checked={selectedAction === action}
        onChange={(e) => handleActionChange(e.target.value)}
        className="text-sm dark:text-neutral-300 font-medium select-none font-normal dark:text-white text-black"
      />
      <span className="text-sm dark:text-neutral-300 font-medium select-none font-normal dark:text-white text-black">
        {action}
      </span>
    </label>
  ))}
</div>

              </div>
            </div>
          </div>
          <div class="p-4 rounded-lg bg-white shadow-sm border-neutral-300 dark:bg-neutral-800 border dark:border-neutral-700 w-full lg:w-2/5 ">
            <form class="flex flex-col items-center gap-4">
              <div class="flex flex-col-reverse gap-1 w-full group">
                {/* here goes the data field */}
                <input
                  type="number"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Enter data"
                  className="p-2 border rounded-md"
                  disabled={
                    selectedAction === "Remove First Node" ||
                    selectedAction === "Remove Last Node" ||
                    selectedAction === "Reverse List" ||
                    selectedAction === "Clear List" ||
                    selectedAction === "Remove Node by Index"
                  }
                />
                <label class="text-sm dark:text-neutral-300 font-medium  font-medium peer-focus:text-primary-800 dark:peer-focus:text-primary-300">
                  Data
                </label>
              </div>
              <div class="flex flex-col-reverse gap-1 w-full group">
                {/* here goes the index field */}
                <input
                  type="number"
                  value={indexValue}
                  onChange={(e) => setIndexValue(e.target.value)}
                  placeholder="Enter index"
                  className="p-2 border rounded-md"
                  disabled={
                    selectedAction === "Add Node at Back" ||
                    selectedAction === "Add Node at Front" ||
                    selectedAction === "Remove First Node" ||
                    selectedAction === "Remove Last Node" ||
                    selectedAction === "Reverse List" ||
                    selectedAction === "Clear List" ||
                    selectedAction === "Remove Node by Data"
                  }
                />
                <label class="text-sm dark:text-neutral-300 font-medium  font-medium peer-focus:text-primary-800 dark:peer-focus:text-primary-300">
                  Index
                </label>
              </div>
              <button
                onClick={handleAction}
                type="submit"
                className="pl-6 pr-6 pt-4 pb-4 gap-4 m-2 uppercase inline-flex items-center justify-center text-xs font-medium rounded-md focus:ring border border-transparent box-border disabled:select-none disabled:cursor-not-allowed bg-primary-800 text-primary-50 hover:bg-primary-900 disabled:bg-neutral-500 w-full mb-0"
                label="EXECUTE"
              >
                <p className="text-left">EXECUTE</p>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
            </form>
          </div>
          <div class="p-4 rounded-lg bg-white shadow-sm border-neutral-300 dark:bg-neutral-800 border dark:border-neutral-700 w-full lg:w-2/5 flex flex-col h-64 gap-1 md:-order-1 order-3 overflow-y-auto">
            <label class="text-sm dark:text-neutral-300 font-medium undefined">
              Information
            </label>
            <pre class="whitespace-pre-line">
              <label class="text-sm dark:text-neutral-300 font-medium mt-2 font-bold">
                {/* here goes the selected action heading Example :insertBack() */}
                {selectedAction}
              </label>
              <p class="dark:text-neutral-300 text-sm normal-case">
                {/* here goes the details of action
                            example :Also referred to as push(), this operation inserts a new node at the end of the Linked List. Usually takes O(n) time, but since we have a separate pointer for the tail, it executes in just O(1) time. */}
                {selectedActionInfo}
              </p>
            </pre>
          </div>
        </div>
        <div
          aria-hidden="true"
          class="h-px ml-px mr-px mt-1 mb-1 bg-neutral-7 00"
        ></div>
        <div class="flex flex-col md:flex-row gap-4 justify-between w-full">
          <div class="p-4 rounded-lg bg-white shadow-sm border-neutral-300 dark:bg-neutral-800 border dark:border-neutral-700 bg-white/50  w-full md:w-4/5">
            <label class="text-sm dark:text-neutral-300 font-medium undefined">
              List Items
            </label>
            <code class="flex flex-wrap flex-col md:flex-row text-white">
              {/* here goes the list of nodes display */}
              {displayList()}
            </code>
          </div>
          <div class="p-4 rounded-lg bg-white shadow-sm border-neutral-300 dark:bg-neutral-800 border dark:border-neutral-700 bg-white/50 w-full md:w-1/5">
            <label class="text-sm dark:text-neutral-300 font-medium undefined">
              Size
            </label>
            <code>
              {/* here goes the size of nodes */}
              <div className="text-lg text-white">
                {head ? getListSize() : 0}
              </div>
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedList;
