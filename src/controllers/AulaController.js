import AulaService from '../services/AulaService.js';

class AulaController {
  async create(req, res) {
    try {
      const aula = await AulaService.create(req.body);
      res.status(201).json(aula);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  async getAll(req, res) {
    try {
      const aulas = await AulaService.findAll();
      res.json(aulas);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  async getById(req, res) {
    try {
      const aula = await AulaService.findById(Number(req.params.id));
      if (!aula) return res.status(404).json({ error: 'Not found' });
      res.json(aula);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  async update(req, res) {
    try {
      const aula = await AulaService.update(Number(req.params.id), req.body);
      res.json(aula);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  async delete(req, res) {
    try {
      await AulaService.delete(Number(req.params.id));
      res.status(204).end();
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  async getCalendario(req, res) {
    try {
      const aulas = await AulaService.getCalendario(req.params.alunoEmail);
      if (!aulas || aulas.length === 0) {
        return res.status(200).json({ message: 'Nenhuma aula disponível no momento' });
      }
      res.json(aulas);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default new AulaController(); 