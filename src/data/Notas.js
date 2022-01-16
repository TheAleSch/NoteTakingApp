export default class ArrayDeNotas{
    constructor(){
        this.notas = []
        this._inscritos = []
    }

    criarNota(title, p, categoria){
        const novaNota = new Nota(title, p, categoria)
        console.log(novaNota)
        this.notas.push(novaNota)
    }

    deletarNota(i) {
        this.notas.splice(i,1)
    }
    inscrever(func){
        this._inscritos.push(func)
    }
    notificar(){
        this._inscritos.forEach(func => func(this.notas))
    }
}

class Nota {
    constructor(title, p, categoria){
      this.title = title
      this.p = p
      this.categoria = categoria
    }
}