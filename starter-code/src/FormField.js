import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class FormField extends Component {

  render() {
    return (
      <div>
        <div className="field">
        <label className="label">{this.props.label}</label>
        <div className="control">
        <input className="input" type={this.props.type} placeholder={this.props.placeholder} />
      </div>
      </div>
      </div>
    )
  }
}
