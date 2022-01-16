import React, { Component } from 'react';
import NotaCard from './notaCard';

class ListaNotas extends React.Component {
    constructor(props) {
        super(props);
    }
    removeCard(index){
        this.props.removeCard(index)
    }
    render() { 
        return (
            <ul>
                {this.props.notas.map((nota, index) => {
                    return (
                        <NotaCard 
                        removeCard={this.removeCard.bind(this)} 
                        index={index} 
                        key={index} 
                        title={nota.titulo} 
                        p={nota.p}
                        cat={nota.cat}/>
                    )
                })}
            </ul>
        );
    }
}
 
export default ListaNotas;