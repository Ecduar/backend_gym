
class EntrenadorController {
  constructor() {
    this.entrenadores = [];
    this.nextId = 1;
  }

  listar() {
    return this.entrenadores;
  }

  agregar(data) {
    const nuevo = { id: this.nextId++, ...data };
    this.entrenadores.push(nuevo);
    return nuevo;
  }

  editar(id, data) {
    const idx = this.entrenadores.findIndex(c => c.id == id);
    if (idx >= 0) {
      this.entrenadores[idx] = { ...this.entrenadores[idx], ...data };
      return this.entrenadores[idx];
    }
    return { error: "Entrenador no encontrado" };
  }

  eliminar(id) {
    const idx = this.entrenadores.findIndex(c => c.id == id);
    if (idx >= 0) {
      return this.entrenadores.splice(idx, 1)[0];
    }
    return { error: "Entrenador no encontrado" };
  }
}

module.exports = EntrenadorController;
