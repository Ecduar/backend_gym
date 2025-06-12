
class ClienteController {
  constructor() {
    this.clientes = [];
    this.nextId = 1;
  }

  listar() {
    return this.clientes;
  }

  agregar(data) {
    const nuevo = { id: this.nextId++, ...data };
    this.clientes.push(nuevo);
    return nuevo;
  }

  editar(id, data) {
    const idx = this.clientes.findIndex(c => c.id == id);
    if (idx >= 0) {
      this.clientes[idx] = { ...this.clientes[idx], ...data };
      return this.clientes[idx];
    }
    return { error: "Cliente no encontrado" };
  }

  eliminar(id) {
    const idx = this.clientes.findIndex(c => c.id == id);
    if (idx >= 0) {
      return this.clientes.splice(idx, 1)[0];
    }
    return { error: "Cliente no encontrado" };
  }
}

module.exports = ClienteController;
