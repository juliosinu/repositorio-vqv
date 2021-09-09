import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      select: '',
      email: '',
      idade: 0,
    };

  }

  handleChange({ target }) {
    const {name, value} = target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    return(
      <div>
        <h1>Estado</h1>
        <form className="form">
          <label>
            <select name="select" value={ this.state.select} onChange={this.handleChange}>
              <option value="valor1" selected>Valor 1</option>
              <option value="valor2">Valor 2</option>
            </select>
          </label>
          email<input type="text" name="email" value={ this.state.email} onChange={this.handleChange}/>
          idade<input type="number" name="idade" value={ this.state.idade} onChange={this.handleChange}/>
          <label>
            O q vc gosta no seu estado
            <textarea name="estadoFavorito" value={ this.state.estadoFavorito} onChange={this.handleChange} />
          </label>
        </form>
      </div>
    )
  }
}

export default App;
