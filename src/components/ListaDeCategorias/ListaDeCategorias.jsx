import React, { Component } from "react";

class ListaDeCategorias extends React.Component {
    constructor() {
        super();
        this.state = {
            categorias: []
        }
    }

  _keyUp(e) {
    if (e.key === "Enter") {
      this.props.addCatF(e.target.value);
    }
  }
  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias.bind(this));
      
  }
  _novasCategorias(categorias){
      this.setState({...this.state,categorias })
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.categorias.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
        <input
          onKeyUp={this._keyUp.bind(this)}
          type="text"
          placeholder="Adicionar Categoria"
        />
      </div>
    );
  }
}

export default ListaDeCategorias;
