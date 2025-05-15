import CaracteristicaService from '../services/CaracteristicaService.js';

class CaracteristicaController {
  async create(req, res) {
    try {
      const caracteristica = await CaracteristicaService.create(req.body);
      res.status(201).json(caracteristica);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  async getAll(req, res) {
    try {
      const caracteristicas = await CaracteristicaService.findAll();
      res.json(caracteristicas);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  async getById(req, res) {
    try {
      const caracteristica = await CaracteristicaService.findById(Number(req.params.id));
      if (!caracteristica) return res.status(404).json({ error: 'Not found' });
      res.json(caracteristica);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  async update(req, res) {
    try {
      const caracteristica = await CaracteristicaService.update(Number(req.params.id), req.body);
      res.json(caracteristica);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  async delete(req, res) {
    try {
      await CaracteristicaService.delete(Number(req.params.id));
      res.status(204).end();
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

export default new CaracteristicaController(); 