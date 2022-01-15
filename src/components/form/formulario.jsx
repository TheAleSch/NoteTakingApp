import React, { Component } from 'react';

class Formulario extends React.Component {
constructor(props) {
    super();

    this.state = {
        estado: {
            titulo: "",
            p: ""
        }

    }
}
    _handleTitulo(evento){
        evento.preventDefault()
        evento.stopPropagation()
        this.state.estado.titulo = evento.target.value
    }
    _handleP(evento){
        evento.preventDefault()
        evento.stopPropagation()
        
        this.state.estado.p = evento.target.value
    }
    _criarNota(evento){
        evento.preventDefault()
        evento.stopPropagation()
        this.props.criarNota(this.state.estado.titulo, this.state.estado.p);
        
        const clean = {estado: {
            titulo: "",
            p: ""
        }}
        this.setState(clean) 
    }


    render() { 
        return (<form onSubmit={this._criarNota.bind(this)}>
            <input onChange={this._handleTitulo.bind(this)} type="text" placeholder="aisjiaisj"></input>
            <textarea onChange={this._handleP.bind(this)} className=""></textarea>
            <button className="">Criar Nota</button>
          </form>);
    }
}
 
export default Formulario;