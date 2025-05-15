import TelefoneService from '../services/TelefoneService.js';

class TelefoneController {
  async create(req, res) {
    try {
      const telefone = await TelefoneService.create(req.body);
      res.status(201).json(telefone);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  async getAll(req, res) {
    try {
      const telefones = await TelefoneService.findAll();
      res.json(telefones);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  async getById(req, res) {
    try {
      const telefone = await TelefoneService.findById(Number(req.params.id));
      if (!telefone) return res.status(404).json({ error: 'Not found' });
      res.json(telefone);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  async update(req, res) {
    try {
      const telefone = await TelefoneService.update(Number(req.params.id), req.body);
      res.json(telefone);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  async delete(req, res) {
    try {
      await TelefoneService.delete(Number(req.params.id));
      res.status(204).end();
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

export default new TelefoneController(); 