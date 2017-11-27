import React, { Component } from 'react';


export default function AddItemButton(props) {
  const onSubmit = e => e.preventDefault();
  //console.log(props.itemId);
  return (
    <form onSubmit={onSubmit}>
      <button className="add-item-button" onClick={() => props.onClick()}>Add Item</button>
    </form>
  );
}