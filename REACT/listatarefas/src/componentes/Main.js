/* eslint-disable import/no-duplicates */
import React, { Component } from 'react';
import './Main.css';

// Form
import { FaPlus } from 'react-icons/fa';

// Tarefas
import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component {
  // criar o estado sem um contrutor:
  // eslint-disable-next-line react/state-in-constructor
  state = {
    novaTarefa: '',
    tarefas: [],
  }

  handleSubmit= (event) => {
    event.preventDefault();
    // pegar as tarefas adicionar na lista
    const { tarefas } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefas = [...tarefas];
    this.setState({
      tarefas: [...novasTarefas, novaTarefa],
    });
  }

  // transformar o método em uma arrow function:
  // alterar o nome do método de inputMudou para handleChange
  handleChange = (event) => {
    this.setState({
      novaTarefa: event.target.value,
    });
  }

    handleEdit = (event, index) => {
      console.log('Edit', index);
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

        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input onChange={this.handleChange} type="text" value={novaTarefa} />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
        <ul className="tarefas">
          {tarefas.map((tarefa, index) => (
            <li key={tarefa}>
              {tarefa}
              <span>
                <FaEdit
                  onClick={(e) => this.handleEdit(e, index)}
                  className="edit"
                />
                <FaWindowClose
                  onClick={(e) => this.handleDelete(e, index)}
                  className="delete"
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
