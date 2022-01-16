import React, { Component } from 'react';


class NotaCard extends React.Component {

    removeCard(index) {
        console.log(this.props)
        this.props.removeCard(this.props.index)
    }

    render() { 
        return (
            <li>
            <h3>{this.props.titulo} <button onClick={this.removeCard.bind(this)}>🗑️</button></h3>
            <h5>{this.props.categoria}</h5>
            <p>{this.props.texto}</p>
        </li>
        )}
}
 
export default NotaCard;