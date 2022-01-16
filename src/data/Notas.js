export default class ArrayDeNotas{
    constructor(){
        this.notas = []
        this._inscritos = []
    }

    criarNota(title, p, categoria){
        const novaNota = new Nota(title, p, categoria)
        console.log(this.notas)
        this.notas.push(novaNota)
        this.notificar();
    }

    deletarNota(i) {
        this.notas.splice(i,1)
        this.notificar();
    }
    inscrever(func){
        this._inscritos.push(func)
        console.log(this._inscritos)

    }
    notificar(){ 
        this._inscritos.forEach((func) => func(this.notas));
    }
    desinscrever(func){
        console.log(this._inscritos.length)
        this._inscritos = this._inscritos.filter( f => f !== func);
        console.log(this._inscritos.length)

    }
}

class Nota {
    constructor(title, p, categoria){
      this.titulo = title
      this.p = p
      this.cat = categoria
    }
}