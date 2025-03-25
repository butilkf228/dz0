import React from "react";

export const Book = ({ name, number, onChange }) => {
  return (
    <>
      <input
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        placeholder="Name"
        required
      />
      <input
        type="tel"
        name="number"
        value={number}
        onChange={onChange}
        placeholder="Number"
        required
      />
    </>
  );
};