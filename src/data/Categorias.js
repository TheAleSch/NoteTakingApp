export default class Categorias {
  constructor() {
    this.categorias = ["a"];
    this._inscritos = [];
  }
  inscrever(func) {
    this._inscritos.push(func);
  }
  notificar() {
    this._inscritos.forEach((func) => func(this.categorias));
  }
  addCat(newCat) {
    this.categorias.push(newCat);
    this.notificar();
  }
}
