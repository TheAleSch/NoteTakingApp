import React, { Component } from 'react';

class Formulario extends React.Component {
constructor(props) {
    super();

    this.state = {
        estado: {
            titulo: "",
            p: "",
            cat: ""
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

    _handleCat(evento){
        evento.preventDefault()
        evento.stopPropagation()

        this.state.estado.cat = evento.target.value
        console.log(this.state.estado)
    }
    _criarNota(evento){
        evento.preventDefault()
        evento.stopPropagation()
        this.props.criarNota(this.state.estado.titulo, this.state.estado.p, this.state.estado.cat);
        
    }


    render() { 
        return (<form onSubmit={this._criarNota.bind(this)}>
            <select onChange={this._handleCat.bind(this)}>
                {this.props.categories.map( (c,i) => <option  key={i} value={c}>{c}</option>)}
            </select>
            <input onChange={this._handleTitulo.bind(this)} type="text" placeholder="aisjiaisj"></input>
            <textarea onChange={this._handleP.bind(this)} className=""></textarea>
            <button className="">Criar Nota</button>
          </form>);
    }
}
 
export default Formulario;