import React, { Component } from 'react';

class ListaDeCategoriasgit extends React.Component {
    _keyUp(e){
        if (e.key === "Enter") {
        console.log(e.target.value)
        this.props.addCatF(e)
            
    }}
    render() { 
        return (
            <div>
            <ul>
{this.props.catList.map((r,i) => <li key={i}>{r}</li>)}
            </ul>
            <input onKeyUp={this._keyUp.bind(this)} type="text" placeholder="Adicionar Categoria" />
            </div>
        );
    }
}
 
export default ListaDeCategoriasgit;