import React, { Component } from 'react';

export default class Main extends Component {
  // criar o estado sem um contrutor:
  // eslint-disable-next-line react/state-in-constructor
  state = {
    novaTarefa: '',
  }

  // transformar o método em uma arrow function:
  // alterar o nome do método de inputMudou para handleChange
  handleChange = (event) => {
    this.setState({
      novaTarefa: event.target.value,
    });
  }

  // componentes que são classes precisam do método
  // render para rederizar algo na tela

  render() {
    const { novaTarefa } = this.state;
    return (
      <div className="main">
        <h1>
          {' '}
          Lista de tarefas:
          {' '}
          {novaTarefa}
        </h1>

        <form action="#">
          <input onChange={this.handleChange} type="text" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}
