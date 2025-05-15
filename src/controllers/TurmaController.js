import TurmaService from '../services/TurmaService.js';
import UsuarioService from '../services/UsuarioService.js';

class TurmaController {
  async create(req, res) {
    const { disciplinaCod, semestre, professorEmail, horario, vagas } = req.body;
    const errors = {};
    if (!disciplinaCod) errors.disciplinaCod = 'Disciplina obrigatória';
    if (!semestre) errors.semestre = 'Semestre obrigatório';
    if (!professorEmail) errors.professorEmail = 'Professor obrigatório';
    if (!horario) errors.horario = 'Horário obrigatório';
    if (vagas === undefined || vagas === null) errors.vagas = 'Número de vagas obrigatório';
    else if (vagas <= 0) errors.vagas = 'Número de vagas deve ser maior que zero';
    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ errors });
    }
    try {
      const turma = await TurmaService.create(req.body);
      res.status(201).json(turma);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  async getAll(req, res) {
    try {
      const turmas = await TurmaService.findAll();
      res.json(turmas);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  async getById(req, res) {
    try {
      const turma = await TurmaService.findById(Number(req.params.id));
      if (!turma) return res.status(404).json({ error: 'Not found' });
      res.json(turma);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  async update(req, res) {
    try {
      const turma = await TurmaService.update(Number(req.params.id), req.body);
      res.json(turma);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  async delete(req, res) {
    try {
      await TurmaService.delete(Number(req.params.id));
      res.status(204).end();
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  async atribuirProfessor(req, res) {
    const { professorEmail } = req.body;
    if (!professorEmail) {
      return res.status(400).json({ error: 'Professor obrigatório' });
    }
    const usuario = await UsuarioService.findById(professorEmail);
    if (!usuario || usuario.perfil !== 'professor') {
      return res.status(400).json({ error: 'Usuário selecionado não é um professor válido' });
    }
    try {
      const turma = await TurmaService.update(Number(req.params.id), { professorEmail });
      res.json(turma);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

export default new TurmaController(); 