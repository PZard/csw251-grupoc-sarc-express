import RecursoService from '../services/RecursoService.js';

class RecursoController {
  async create(req, res) {
    try {
      const recurso = await RecursoService.create(req.body);
      res.status(201).json(recurso);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  async getAll(req, res) {
    try {
      const recursos = await RecursoService.findAll();
      res.json(recursos);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  async getById(req, res) {
    try {
      const recurso = await RecursoService.findById(Number(req.params.idRecurso));
      if (!recurso) return res.status(404).json({ error: 'Not found' });
      res.json(recurso);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  async update(req, res) {
    try {
      const recurso = await RecursoService.update(Number(req.params.idRecurso), req.body);
      res.json(recurso);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  async delete(req, res) {
    try {
      await RecursoService.delete(Number(req.params.idRecurso));
      res.status(204).end();
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

export default new RecursoController(); 