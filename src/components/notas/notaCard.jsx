import React, { Component } from 'react';


class NotaCard extends React.Component {
    
    constructor(props) {
        super(props);
    }
    removeCard(index) {
        this.props.removeCard(this.props.index)
    }
    render() { 
        return (
            <li>
            <h3>{this.props.title} <button onClick={this.removeCard.bind(this)}>🗑️</button></h3>
            <p>{this.props.p}</p>
        </li>
        )}
}
 
export default NotaCard;