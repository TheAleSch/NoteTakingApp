import "./App.css";
import Formulario from "./components/form/formulario";
import ListaNotas from "./components/notas/ListaNotas";
import React, { Component } from "react";
import ListaDeCategorias from "./components/ListaDeCategorias";
import ArrayDeNotas from "./data/Notas";
import Categorias from "./data/Categorias";

class App extends Component {
  constructor(props) {
    super(props);
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }
  render() {
    return (
      <div className="App">
        <Formulario
          categories={[this.categorias.categorias]}
          criarNota={this.notas.criarNota.bind(this.notas)}
        />
        <ListaDeCategorias
          categorias={this.categorias}
          addCatF={this.categorias.addCat.bind(this.categorias)}
        />
        <ListaNotas
          removeCard={this.notas.deletarNota}
          notas={this.notas.notas}
        />
      </div>
    );
  }
}

export default App;
