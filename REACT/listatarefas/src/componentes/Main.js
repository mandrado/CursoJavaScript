/* eslint-disable import/no-duplicates */
import React, { Component } from 'react';
import './Main.css';
import Tarefas from './Tarefas';
import Form from './Form';

export default class Main extends Component {
  // criar o estado sem um contrutor:
  // eslint-disable-next-line react/state-in-constructor
  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1,
  }

  componentDidMount() {
    // é executando quando o componente é montado
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));

    // chegar se existem tarefas?
    if (!tarefas) return;
    // se existir tarefas setar o estado
    this.setState({ tarefas });
  }

  componentDidUpdate(prevPropos, prevState) {
    const { tarefas } = this.state;

    // retonar apenas quando a lista de tarefas mudar:
    if (tarefas === prevState.tarefas) return;

    // console.log('As tarefas mudaram', tarefas);
    // Salvando as tarefaqs no storage local
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  handleSubmit= (event) => {
    event.preventDefault();
    // pegar as tarefas adicionar na lista
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefas = [...tarefas];

    if (index === -1) {
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: '',
      });
    } else {
      novasTarefas[index] = novaTarefa;
      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
      });
    }
  }

  // transformar o método em uma arrow function:
  // alterar o nome do método de inputMudou para handleChange
  handleChange = (event) => {
    this.setState({
      novaTarefa: event.target.value,
    });
  }

    handleEdit = (event, index) => {
      const { tarefas } = this.state;
      this.setState({
        index,
        novaTarefa: tarefas[index],
      });
    }

  handleDelete = (event, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);
    this.setState({
      tarefas: [...novasTarefas],
    });
  }

  // componentes que são classes precisam do método
  // render para rederizar algo na tela

  render() {
    const { novaTarefa, tarefas } = this.state;
    return (
      <div className="main">
        <h1>
          {' '}
          Lista de tarefas:
          {' '}
          {novaTarefa}
        </h1>

        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          novaTarefa={novaTarefa}
        />
        <Tarefas
          tarefas={tarefas}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />

      </div>
    );
  }
}
