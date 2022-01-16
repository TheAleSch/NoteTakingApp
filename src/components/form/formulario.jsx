import React, { Component } from "react";

class Formulario extends React.Component {
  constructor(props) {
    super();

    this.state = {
        novaNota: {},
        categorias: []
    }
    this._novasCategorias = this._novasCategorias.bind(this);
  }
  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias);

  }
  componentWillUnmount() {
    this.props.categorias.desinscrever(this._novasCategorias);
  }
  _novasCategorias(categorias){
    this.setState({...this.state,categorias })
}
  _handleTitulo(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.state.novaNota.titulo = evento.target.value;
  }
  _handleP(evento) {
    evento.preventDefault();
    evento.stopPropagation();

    this.state.novaNota.p = evento.target.value;
  }

  _handleCat(evento) {
    evento.preventDefault();
    evento.stopPropagation();

    this.state.novaNota.cat = evento.target.value;
  }
  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.state.novaNota.titulo, this.state.novaNota.p, this.state.novaNota.cat);
  }

  render() {
    return (
      <form onSubmit={this._criarNota.bind(this)}>
        <select onChange={this._handleCat.bind(this)}>
          {this.state.categorias.map((c, i) => (
            <option key={i} value={c}>
              {c}
            </option>
          ))}
        </select>
        <input
          onChange={this._handleTitulo.bind(this)}
          type="text"
          placeholder="aisjiaisj"
        ></input>
        <textarea onChange={this._handleP.bind(this)} className=""></textarea>
        <button className="">Criar Nota</button>
      </form>
    );
  }
}

export default Formulario;
