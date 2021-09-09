import './App.css';
import React from 'react';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques: 0
    }
    this.clicou1 = this.clicou1.bind(this);
    this.clicou2 = this.clicou2.bind(this);
    this.clicou3 = this.clicou3.bind(this);
  }

  clicou1() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1 
    }))
  }
  clicou2() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1 
    }))
  }
  clicou3() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1 
    }))
  }
  render() {
    return ( <div>
      <button onClick={this.clicou1}>{this.state.numeroDeCliques}</button>
      <button onClick={this.clicou2}>{this.state.numeroDeCliques}</button>
      <button onClick={this.clicou3}>{this.state.numeroDeCliques}</button>
      </div>
    )
  }
}

export default App;
