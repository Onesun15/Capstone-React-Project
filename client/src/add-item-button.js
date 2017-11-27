import React, { Component } from 'react'
import { connect } from 'react-redux'

class AddItemButton extends Component {
  render() {
    return (
        <div className='add-item-div'>
          <button type="button" className="add-button">Add to Portfolio</button>
        </div>
    )
  }
}

export default connect()(AddItemButton)