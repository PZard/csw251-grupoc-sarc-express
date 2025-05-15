import AlunoTurmaService from '../services/AlunoTurmaService.js';

class AlunoTurmaController {
  async create(req, res) {
    try {
      const alunoTurma = await AlunoTurmaService.create(req.body);
      res.status(201).json(alunoTurma);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  async getAll(req, res) {
    try {
      const alunoTurmas = await AlunoTurmaService.findAll();
      res.json(alunoTurmas);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  async getById(req, res) {
    try {
      const alunoTurma = await AlunoTurmaService.findById(Number(req.params.id));
      if (!alunoTurma) return res.status(404).json({ error: 'Not found' });
      res.json(alunoTurma);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  async update(req, res) {
    try {
      const alunoTurma = await AlunoTurmaService.update(Number(req.params.id), req.body);
      res.json(alunoTurma);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  async delete(req, res) {
    try {
      await AlunoTurmaService.delete(Number(req.params.id));
      res.status(204).end();
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

export default new AlunoTurmaController(); 