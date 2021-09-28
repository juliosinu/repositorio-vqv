import React, { Component } from 'react';

class Email extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="email">
      Email:
      <input
      id="email"
      type="text"
      name="email"
      value={ value }
      onChange={ handleChange}
      />
    </label>

    );
  }
}

export default Email;