import React, { Component } from 'react';

export default class Main extends Component {
  // criar o estado
  constructor(props) {
    // sempre que temos um constructor em uma classe que herda de outra classe
    // no caso Componente, temos que utilizar super() para chamar o contrutor da
    // classe que estamos herdando
    super(props);
    // componentes podem ter propriedades (props) e devem vir no
    // contructor e no super.
    // Criamos o construtor e o super para poder criar a variável de estado:
    this.state = {
      // este estate é o estado do nosso componente.
      // todas as chaves que estiverem aqui dentro, serão
      // o estado do nosso componente.
      // tudo que mudar aqui, irá refletir dentro do render
      // inicializar o estado:
      novaTarefa: '',

    };
    this.inputMudou = this.inputMudou.bind(this);
  }

  inputMudou(event) {
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
          <input onChange={this.inputMudou} type="text" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}
