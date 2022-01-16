export default class Categorias {
  constructor() {
    this.categorias = [];
    this._inscritos = [];
  }
  inscrever(func) {
    this._inscritos.push(func);

  }
  notificar() {
    this._inscritos.forEach((func) => func(this.categorias));
  }
  desinscrever(func){
    console.log(this._inscritos.length)
    this._inscritos = this._inscritos.filter( f => f !== func);
    console.log(this._inscritos.length)
  }
  addCat(newCat) {
    this.categorias.push(newCat);
    this.notificar();
  }
}
