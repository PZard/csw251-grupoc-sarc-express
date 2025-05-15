import UsuarioService from '../services/UsuarioService.js';

class UsuarioController {
  async create(req, res) {
    const { email, nome, dataNascimento, sexo } = req.body;
    const errors = {};
    if (!email) errors.email = 'E-mail é obrigatório';
    if (!nome) errors.nome = 'Nome é obrigatório';
    if (!dataNascimento) errors.dataNascimento = 'Data de nascimento é obrigatória';
    if (!sexo) errors.sexo = 'Sexo é obrigatório';

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ errors });
    }

    const existing = await UsuarioService.findById(email);
    if (existing) {
      return res.status(400).json({ error: 'E-mail já cadastrado' });
    }

    try {
      const usuario = await UsuarioService.create(req.body);
      res.status(201).json(usuario);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const usuarios = await UsuarioService.findAll();
      res.json(usuarios);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getById(req, res) {
    try {
      const usuario = await UsuarioService.findById(req.params.email);
      if (!usuario) return res.status(404).json({ error: 'Not found' });
      res.json(usuario);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      if (req.body.email && req.body.email !== req.params.email) {
        return res.status(400).json({ error: 'E-mail não pode ser alterado' });
      }

      if (req.body.dataNascimento && isNaN(Date.parse(req.body.dataNascimento))) {
        return res.status(400).json({ error: 'Data de nascimento inválida' });
      }
      const usuario = await UsuarioService.update(req.params.email, req.body);
      res.json(usuario);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      const usuario = await UsuarioService.findById(req.params.email);
      if (!usuario) return res.status(404).json({ error: 'Not found' });

      if ((usuario.turmasProfessor && usuario.turmasProfessor.length > 0) ||
          (usuario.alunoTurmas && usuario.alunoTurmas.length > 0) ||
          (usuario.chamadas && usuario.chamadas.length > 0)) {
        return res.status(400).json({ error: 'Usuário vinculado a atividades acadêmicas' });
      }
      await UsuarioService.delete(req.params.email);
      res.status(204).end();
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

export default new UsuarioController(); 