import React, { useState } from "react";
import "../App.css";
import image from "../assets/image.png";
import { FaPlus } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export default function List() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  const addItem = () => {
    if (!inputValue) {
      alert("data may not be empty");
    } else {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };
  const deleteItem = (id) => {
    console.log(id);
    const allData = items.filter((elem, ind) => {
      return ind !== id;
    });
    setItems(allData);
  };
  const updateMe = () => {
    setItems([]);
  };
  return (
    <>
      <div className="main-div">
        <div className="image-div">
          <figure>
            <img src={image} alt="" />
          </figure>
          <figcaption>Add your Daily targets Here</figcaption>
        </div>
        <div className="input-section">
          <input
            type="text"
            name="text"
            id="text"
            placeholder="✍️ Write Here"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className="icon-container">
            <FaPlus title="Add here" onClick={addItem} />
          </div>
        </div>
        {items.map((elem, ind) => {
          return (
            <div className="all-item" key={ind}>
              <div className="each-item">
                <div className="text">{elem}</div>
              </div>
              <div className="trash-icon" onClick={() => deleteItem(ind)}>
                <FaTrash />
              </div>
            </div>
          );
        })}
        <div className="clear">
          <button onClick={updateMe}>Clear All</button>
        </div>
      </div>
    </>
  );
}
