class EspaciosController {
  constructor() {
    this.data = [];
    this.nextId = 1;
  }

  listar() {
    return this.data;
  }

  agregar(data) {
    const nuevo = { id: this.nextId++, ...data };
    this.data.push(nuevo);
    return nuevo;
  }

  editar(id, data) {
    const idx = this.data.findIndex(item => item.id == id);
    if (idx >= 0) {
      this.data[idx] = { ...this.data[idx], ...data };
      return this.data[idx];
    }
    return { error: "No encontrado" };
  }

  eliminar(id) {
    const idx = this.data.findIndex(item => item.id == id);
    if (idx >= 0) {
      return this.data.splice(idx, 1)[0];
    }
    return { error: "No encontrado" };
  }
}

module.exports = EspaciosController;
