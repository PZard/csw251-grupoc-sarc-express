import CurriculoService from '../services/CurriculoService.js';

class CurriculoController {
  async create(req, res) {
    const { nomeCurso, dataInicioVigencia, dataFimVigencia } = req.body;
    const errors = {};
    if (!nomeCurso) errors.nomeCurso = 'Nome do curso obrigatório';
    if (!dataInicioVigencia) errors.dataInicioVigencia = 'Data de início obrigatória';
    if (!dataFimVigencia) errors.dataFimVigencia = 'Data de fim obrigatória';
    if (dataInicioVigencia && dataFimVigencia && new Date(dataInicioVigencia) >= new Date(dataFimVigencia)) {
      errors.datas = 'Data de início deve ser anterior à data de fim';
    }
    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ errors });
    }
    try {
      const curriculo = await CurriculoService.create(req.body);
      res.status(201).json(curriculo);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

export default new CurriculoController(); 