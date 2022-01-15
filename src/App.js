import './App.css';
import Formulario from './components/form/formulario';
import ListaNotas from './components/notas/ListaNotas';
import React, { Component } from 'react';
import ListaDeCategorias from './components/ListaDeCategorias'

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
  notasArray: [],
  categorias: []
  }
}

   criarNota(titulo, p, cat){
    const novaNota = {titulo, p, cat}
    const novoArrayNotas = [...this.state.notasArray,novaNota]
    const novoEstado = {
      notasArray: novoArrayNotas
    }
    this.setState(novoEstado)  
    console.log(novoEstado)

  }
  
  removeCard(index){

    let novaLista = {notasArray: [...this.state.notasArray]}
    novaLista.notasArray.splice(index, 1)
    this.setState(novaLista)  
    console.log(this.state.notasArray)
  }

  addCat(e){
    let valor = e.target.value
    let allCats = [...this.state.categorias,valor]
    this.state.categorias = allCats
    console.log(allCats)
    this.setState(allCats)
  }


  render(){
  return (
    <div className="App">
<Formulario 
categories={this.state.categorias} 
criarNota={this.criarNota.bind(this)
}/>
<ListaDeCategorias 
catList={this.state.categorias} 
addCatF={this.addCat.bind(this)}
/>
<ListaNotas 
removeCard={this.removeCard.bind(this)} 
arrayNotas={this.state.notasArray}
/>
    </div>
  )}
}


export default App;
