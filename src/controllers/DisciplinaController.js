import DisciplinaService from '../services/DisciplinaService.js';

class DisciplinaController {
  async create(req, res) {
    const { codDisciplina, nome, creditos, programa } = req.body;
    const errors = {};
    if (!codDisciplina) errors.codDisciplina = 'Código da disciplina obrigatório';
    if (!nome) errors.nome = 'Nome da disciplina obrigatório';
    if (!creditos) errors.creditos = 'Número de créditos obrigatório';
    if (!programa) errors.programa = 'Programa da disciplina obrigatório';
    
    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ errors });
    }
    
    try {
      const disciplina = await DisciplinaService.create(req.body);
      res.status(201).json(disciplina);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const disciplinas = await DisciplinaService.findAll();
      res.json(disciplinas);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getById(req, res) {
    try {
      const disciplina = await DisciplinaService.findById(req.params.codDisciplina);
      if (!disciplina) return res.status(404).json({ error: 'Not found' });
      res.json(disciplina);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const disciplina = await DisciplinaService.update(req.params.codDisciplina, req.body);
      res.json(disciplina);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      await DisciplinaService.delete(req.params.codDisciplina);
      res.status(204).end();
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

export default new DisciplinaController(); 