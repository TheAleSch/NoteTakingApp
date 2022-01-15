import './App.css';
import Formulario from './components/form/formulario';
import ListaNotas from './components/notas/ListaNotas';
import React, { Component } from 'react';


class App extends Component {
constructor(props) {
  super(props);
  this.state = {
  notasArray: []
  }
}

   criarNota(titulo, p){
    const novaNota = {titulo, p}
    const novoArrayNotas = [...this.state.notasArray,novaNota]
    const novoEstado = {
      notasArray: novoArrayNotas
    }
    this.setState(novoEstado)  
    console.log(novoEstado)

  }
  
  removeCard(index){

    let novaLista = {notasArray: [...this.state.notasArray]}
    let remove = (index) => {novaLista.notasArray.splice(index, 1)}
    remove()
    this.setState(novaLista)  
  }


  render(){
  return (
    <div className="App">
<Formulario criarNota={this.criarNota.bind(this)}/>
<ListaNotas removeCard={this.removeCard.bind(this)} arrayNotas={this.state.notasArray}/>
    </div>
  )}
}


export default App;
