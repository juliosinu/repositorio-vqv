import React, { Component } from 'react';
import Email from '../src/Componentes/Email';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      state: '',
      age: '',
      email: '',
      name: '',
      special: false,
    };

  }

  handleChange({ target }) {
    const {name} = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    })
  }

  render() {
    return(
      <div>
        <h1>Formulario</h1>
        <form className="form">
          Idade
          <label htmlFor="age">
            <select id="age"name="idade" value={ this.state.age} onChange={this.handleChange}>
              <option value="menor18" selected>Menor de 18 anos</option>
              <option value="maior18">Maior de 18 anos</option>
            </select>
          </label>
          <Email value={ this.state.email } handleChange={ this.handleChange } />
          <label htmlFor="nome">
            Nome:
            <input
            id="nome"
            type="text"
            name="name"
            value={ this.state.name}
            onChange={this.handleChange}
            />
          </label>
          <label htmlFor="estado">
            Estado Favorito:
            <textarea
            id="estado"
            name="state"
            value={ this.state.state}
            onChange={this.handleChange}
            />
          </label>
          <label htmlFor="special">
          Necessidades Especiais: Sim
            <input
              id="special"
              type="checkbox"
              name="special"
              value={ this.state.special}
              onChange={ this.handleChange }
            />
          </label>
        </form>
      </div>
    )
  }
}

export default App;
