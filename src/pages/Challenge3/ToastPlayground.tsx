import React, { useState } from "react";
import useToast from "./useToast";

export default function ToastPlayground() {
  const { addToast } = useToast();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [position, setPosition] = useState("tl");

  const submitHandler = (e) => {
    e.preventDefault();
    addToast(
      title,
      description,
      <button className="toast-action">Undo</button>,
      position
    );
  };
  return (
    <form onSubmit={submitHandler} className="minimalist-form">
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="desc">Description</label>
      <input
        type="text"
        id="desc"
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="position-selection">Position</label>
      <select
        name="position-selection"
        id="position-selection"
        onChange={(e) => setPosition(e.target.value)}
      >
        <option value="tl">top-left</option>
        <option value="tr">top-right</option>
        <option value="bl">bottom-left</option>
        <option value="br">bottom-right</option>
      </select>
      <button type="submit">SHOW TOAST</button>
    </form>
  );
}
