import React, { Component } from 'react'
import { connect } from 'react-redux'

class AddItemButton extends Component {

  render() {
     const onSubmit = e => e.preventDefault();
    return (
      <form onSubmit={onSubmit}>
      <input
        type="submit"
        id="add-item"
        className="add-item"
        name="submit"
        value="Add Item"
      />
    </form>
    )
  }
}

export default connect()(AddItemButton)