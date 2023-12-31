import React, { Component } from 'react';
import Display from '../display';
import Botao from '../botao';

import './index.css';

export default class Calculadora extends Component {
  state = {
    displayValue: '',
    sinais: ['+', '-', '*', '.', '/'],
    ac: false,
  };

  handleButtonClick = (e) => {
    /*
    Os botões só tem 1 classe, mas caso tivesse mais do que 1, seria necessário fazer um split,
    para separar os nomes por espaço, e depois separar as classes em um array
    */
    const { displayValue, ac } = this.adicionar(e);

    this.setState({
      displayValue,
      ac,
    });
  };

  adicionar(e) {
    let { displayValue, ac } = this.state;

    if (e.target.className === 'apagar') {
      if (ac) {
        displayValue = '';
        ac = false;
      } else {
        displayValue = displayValue.slice(0, displayValue.length - 1);
      }
    }

    if (e.target.className === 'total') {
      // eslint-disable-next-line
      displayValue = eval(displayValue);
      ac = true;
    }

    if (e.target.className === 'botao') {
      ac = false;
      displayValue += e.target.innerText;
    }

    if (e.target.className === 'sinais') {
      const validaSinal = this.validaSinal(e);
      if (!validaSinal) displayValue += e.target.innerText;
    }

    return { displayValue, ac };
  }

  validaSinal(e) {
    const { displayValue, sinais } = this.state;

    let error;

    if (e.target.className === 'sinais') {
      sinais.forEach((sinal) => {
        if (displayValue[displayValue.length - 1] === sinal) {
          error = true;
        }

        if (displayValue.length === 0) {
          error = true;
        }
      });
    }

    return error;
  }

  render() {
    const { displayValue, ac } = this.state;
    return (
      <div className="calculadora">
        <div className="display">
          <Display displayValue={displayValue} />
        </div>
        <div className="botoes">
          <Botao handleClick={this.handleButtonClick} label={ac ? 'AC' : 'CE'} classe="apagar" />
          <Botao handleClick={this.handleButtonClick} label="/" classe="sinais" />
          <Botao handleClick={this.handleButtonClick} label="7" classe="botao" />
          <Botao handleClick={this.handleButtonClick} label="8" classe="botao" />
          <Botao handleClick={this.handleButtonClick} label="9" classe="botao" />
          <Botao handleClick={this.handleButtonClick} label="*" classe="sinais" />
          <Botao handleClick={this.handleButtonClick} label="4" classe="botao" />
          <Botao handleClick={this.handleButtonClick} label="5" classe="botao" />
          <Botao handleClick={this.handleButtonClick} label="6" classe="botao" />
          <Botao handleClick={this.handleButtonClick} label="-" classe="sinais" />
          <Botao handleClick={this.handleButtonClick} label="1" classe="botao" />
          <Botao handleClick={this.handleButtonClick} label="2" classe="botao" />
          <Botao handleClick={this.handleButtonClick} label="3" classe="botao" />
          <Botao handleClick={this.handleButtonClick} label="+" classe="sinais" />
          <Botao handleClick={this.handleButtonClick} label="0" classe=" botao" />
          <Botao handleClick={this.handleButtonClick} label="." classe="sinais" />
          <Botao handleClick={this.handleButtonClick} label="=" classe="total" />
        </div>
      </div>
    );
  }
}
