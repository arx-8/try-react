import PropTypes from "prop-types"
import React, { Component } from "react"

export class Picker extends Component {
  render() {
    const { value, onChange, options } = this.props

    return (
      <span>
        <h1>{value}</h1>
        {/* eslint-disable-next-line jsx-a11y/no-onchange */}
        <select onChange={(e) => onChange(e.target.value)} value={value}>
          {options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </span>
    )
  }
}

Picker.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
