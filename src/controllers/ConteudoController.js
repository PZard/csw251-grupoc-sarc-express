import ConteudoService from '../services/ConteudoService.js';

class ConteudoController {
  async create(req, res) {
    try {
      const conteudo = await ConteudoService.create(req.body);
      res.status(201).json(conteudo);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  async getAll(req, res) {
    try {
      const conteudos = await ConteudoService.findAll();
      res.json(conteudos);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  async getById(req, res) {
    try {
      const conteudo = await ConteudoService.findById(Number(req.params.id));
      if (!conteudo) return res.status(404).json({ error: 'Not found' });
      res.json(conteudo);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  async update(req, res) {
    try {
      const conteudo = await ConteudoService.update(Number(req.params.id), req.body);
      res.json(conteudo);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  async delete(req, res) {
    try {
      await ConteudoService.delete(Number(req.params.id));
      res.status(204).end();
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

export default new ConteudoController(); 