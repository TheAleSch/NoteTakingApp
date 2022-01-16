import React, { Component } from 'react';
import NotaCard from './notaCard';

class ListaNotas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notas: []
        }
        this._novasNotas =  this._novasNotas.bind(this);
    }
    removeCard(index){
        this.props.removeCard(index)
    }

    componentDidMount(){
        this.props.notas.inscrever(this._novasNotas)

    }
    componentWillUnmount() {
        this.props.notas.desinscrever(this._novasNotas);

    }
    _novasNotas(notas){
        this.setState({...this.state, notas})
        console.log(this.state)
    }
    render() { 
        return (
            <ul>
                {this.state.notas.map((nota, index) => {
                    return (
                        <NotaCard 
                        removeCard={this.removeCard.bind(this)} 
                        index={index} 
                        key={index} 
                        titulo={nota.titulo} 
                        texto={nota.p}
                        categoria={nota.cat}/>
                    )
                })}
            </ul>
        );
    }
}
 
export default ListaNotas;