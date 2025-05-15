import ChamadaService from '../services/ChamadaService.js';

class ChamadaController {
  async create(req, res) {
    // Expect req.body to be an array of attendance records
    const chamadas = Array.isArray(req.body) ? req.body : [req.body];
    const anyMarked = chamadas.some(c => c.presenca === true);
    if (!anyMarked) {
      return res.status(400).json({ warning: 'Nenhuma presença marcada. Deseja confirmar o salvamento sem presenças marcadas?' });
    }
    try {
      const result = await Promise.all(chamadas.map(c => ChamadaService.create(c)));
      res.status(201).json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  async getAll(req, res) {
    try {
      const chamadas = await ChamadaService.findAll();
      res.json(chamadas);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  async getById(req, res) {
    try {
      const chamada = await ChamadaService.findById(Number(req.params.id));
      if (!chamada) return res.status(404).json({ error: 'Not found' });
      res.json(chamada);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  async update(req, res) {
    try {
      const chamada = await ChamadaService.update(Number(req.params.id), req.body);
      res.json(chamada);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  async delete(req, res) {
    try {
      await ChamadaService.delete(Number(req.params.id));
      res.status(204).end();
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  async getHistorico(req, res) {
    try {
      const chamadas = await ChamadaService.getHistorico(req.params.alunoEmail);
      if (!chamadas || chamadas.length === 0) {
        return res.status(200).json({ message: 'Nenhuma presença registrada' });
      }
      res.json(chamadas);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default new ChamadaController(); 