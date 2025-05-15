import AvaliacaoService from '../services/AvaliacaoService.js';

class AvaliacaoController {
  async create(req, res) {
    const { data, enunciado, tipo, turmaId } = req.body;
    const errors = {};
    if (!data) errors.data = 'Data é obrigatória';
    if (!enunciado) errors.enunciado = 'Enunciado é obrigatório';
    if (!tipo) errors.tipo = 'Tipo é obrigatório';
    if (!turmaId) errors.turmaId = 'Turma é obrigatória';
    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ errors });
    }

    if (new Date(data) < new Date()) {
      return res.status(400).json({ error: 'Data inválida para avaliação' });
    }
    try {
      const avaliacao = await AvaliacaoService.create(req.body);
      res.status(201).json(avaliacao);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  async getAll(req, res) {
    try {
      const avaliacoes = await AvaliacaoService.findAll();
      res.json(avaliacoes);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  async getById(req, res) {
    try {
      const avaliacao = await AvaliacaoService.findById(Number(req.params.id));
      if (!avaliacao) return res.status(404).json({ error: 'Not found' });
      res.json(avaliacao);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  async update(req, res) {
    try {
      const avaliacao = await AvaliacaoService.update(Number(req.params.id), req.body);
      res.json(avaliacao);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  async delete(req, res) {
    try {
      await AvaliacaoService.delete(Number(req.params.id));
      res.status(204).end();
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  async getProgramadas(req, res) {
    try {
      const { disciplina } = req.query;
      const avaliacoes = await AvaliacaoService.getProgramadas(req.params.alunoEmail, disciplina);
      res.json(avaliacoes);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default new AvaliacaoController(); 