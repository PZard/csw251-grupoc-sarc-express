import ReservaService from '../services/ReservaService.js';

class ReservaController {
  async create(req, res) {
    try {
      const reserva = await ReservaService.create(req.body);
      res.status(201).json(reserva);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  async getAll(req, res) {
    try {
      const reservas = await ReservaService.findAll();
      res.json(reservas);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  async getById(req, res) {
    try {
      const reserva = await ReservaService.findById(Number(req.params.id));
      if (!reserva) return res.status(404).json({ error: 'Not found' });
      res.json(reserva);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  async update(req, res) {
    try {
      const reserva = await ReservaService.update(Number(req.params.id), req.body);
      res.json(reserva);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  async delete(req, res) {
    try {
      await ReservaService.delete(Number(req.params.id));
      res.status(204).end();
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

export default new ReservaController(); 